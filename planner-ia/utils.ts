import prisma from "@/lib/prisma";
import { startOfMonth, endOfMonth } from 'date-fns';

async function buscarDespesasDoMes(userId: string) {
  const inicioDoMes = startOfMonth(new Date());
  const fimDoMes = endOfMonth(new Date());

  console.log('📅 Buscando despesas de:', inicioDoMes, 'até', fimDoMes);
  console.log('🔍 UserID:', userId);

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

  console.log('📄 Despesas encontradas:', despesas);

  return despesas;
}

function agruparPorCategoria(despesas: any[]) {
  const resumo: Record<string, number> = {};

  console.log('🔎 Iniciando agrupamento por categoria...');

  despesas.forEach((despesa) => {
    console.log('➡️ Processando despesa:', despesa);

    const categoria = despesa.category?.name || 'Outros';

    if (!resumo[categoria]) {
      resumo[categoria] = 0;
    }

    resumo[categoria] += despesa.amount;

    console.log(`🧾 Categoria "${categoria}" somando:`, resumo[categoria]);
  });

  console.log('✅ Resumo agrupado por categoria:', resumo);

  return resumo;
}

export async function salvarResumoFinanceiro(userId: string) {
  console.log('🚀 Iniciando geração de resumo financeiro...');
  const despesas = await buscarDespesasDoMes(userId);

  if (despesas.length === 0) {
    console.warn('⚠️ Nenhuma despesa encontrada no mês atual');
    return { message: 'Nenhuma despesa encontrada' };
  }

  const resumo = agruparPorCategoria(despesas);

  console.log('🏁 Resumo financeiro final:', resumo);

  return resumo;
}
