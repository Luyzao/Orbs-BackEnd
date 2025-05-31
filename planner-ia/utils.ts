import prisma from "@/lib/prisma"
import { startOfMonth, endOfMonth } from 'date-fns';

async function buscarDespesasDoMes(userId: string) {
  const inicioDoMes = startOfMonth(new Date());
  const fimDoMes = endOfMonth(new Date());

  const despesas = await prisma.expense.findMany({
    where: {
      userId,
      date: {
        gte: inicioDoMes,
        lte: fimDoMes,
      },
    },
    include: {
      category: true, 
    },
  });

  return despesas;
}

function agruparPorCategoria(despesas: any[]) {
  const resumo: Record<string, number> = {};

  despesas.forEach((despesa) => {
    const categoria = despesa.category.name;

    if (!resumo[categoria]) {
      resumo[categoria] = 0;
    }

    resumo[categoria] += despesa.amount;
  });

  return resumo;
}

export async function salvarResumoFinanceiro(userId: string) {
  const despesas = await buscarDespesasDoMes(userId);

  if (despesas.length === 0) {
    console.log('Nenhuma despesa encontrada no mês atual');
    return null;
  }

  const resumo = agruparPorCategoria(despesas);

  const now = new Date();
  const mesAtual = now.getMonth() + 1;
  const anoAtual = now.getFullYear();

  // Verificar se já existe um registro para este usuário no mês e ano atuais
  const analiseExistente = await prisma.financialAnalysis.findFirst({
    where: {
      userId,
      month: mesAtual,
      year: anoAtual,
    },
  });

  if (analiseExistente) {
    // Se existir, atualiza
    const atualizada = await prisma.financialAnalysis.update({
      where: {
        id: analiseExistente.id,
      },
      data: {
        data: resumo,
        createdAt: new Date(),
      },
    });

    return atualizada;
  } else {
    // Se não existir, cria
    const criada = await prisma.financialAnalysis.create({
      data: {
        userId,
        month: mesAtual,
        year: anoAtual,
        data: resumo,
      },
    });

    return criada;
  }
}
