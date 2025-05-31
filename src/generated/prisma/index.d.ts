
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Balance
 * 
 */
export type Balance = $Result.DefaultSelection<Prisma.$BalancePayload>
/**
 * Model Income
 * 
 */
export type Income = $Result.DefaultSelection<Prisma.$IncomePayload>
/**
 * Model IncomeSummary
 * 
 */
export type IncomeSummary = $Result.DefaultSelection<Prisma.$IncomeSummaryPayload>
/**
 * Model ExpenseAnalysis
 * 
 */
export type ExpenseAnalysis = $Result.DefaultSelection<Prisma.$ExpenseAnalysisPayload>
/**
 * Model Forms
 * 
 */
export type Forms = $Result.DefaultSelection<Prisma.$FormsPayload>
/**
 * Model FinancialAnalysis
 * 
 */
export type FinancialAnalysis = $Result.DefaultSelection<Prisma.$FinancialAnalysisPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GoalStatus: {
  PENDING: 'PENDING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED'
};

export type GoalStatus = (typeof GoalStatus)[keyof typeof GoalStatus]

}

export type GoalStatus = $Enums.GoalStatus

export const GoalStatus: typeof $Enums.GoalStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.BalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.income`: Exposes CRUD operations for the **Income** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Incomes
    * const incomes = await prisma.income.findMany()
    * ```
    */
  get income(): Prisma.IncomeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.incomeSummary`: Exposes CRUD operations for the **IncomeSummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IncomeSummaries
    * const incomeSummaries = await prisma.incomeSummary.findMany()
    * ```
    */
  get incomeSummary(): Prisma.IncomeSummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expenseAnalysis`: Exposes CRUD operations for the **ExpenseAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExpenseAnalyses
    * const expenseAnalyses = await prisma.expenseAnalysis.findMany()
    * ```
    */
  get expenseAnalysis(): Prisma.ExpenseAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.forms`: Exposes CRUD operations for the **Forms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Forms
    * const forms = await prisma.forms.findMany()
    * ```
    */
  get forms(): Prisma.FormsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.financialAnalysis`: Exposes CRUD operations for the **FinancialAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinancialAnalyses
    * const financialAnalyses = await prisma.financialAnalysis.findMany()
    * ```
    */
  get financialAnalysis(): Prisma.FinancialAnalysisDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Expense: 'Expense',
    Category: 'Category',
    Goal: 'Goal',
    Balance: 'Balance',
    Income: 'Income',
    IncomeSummary: 'IncomeSummary',
    ExpenseAnalysis: 'ExpenseAnalysis',
    Forms: 'Forms',
    FinancialAnalysis: 'FinancialAnalysis'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "expense" | "category" | "goal" | "balance" | "income" | "incomeSummary" | "expenseAnalysis" | "forms" | "financialAnalysis"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Balance: {
        payload: Prisma.$BalancePayload<ExtArgs>
        fields: Prisma.BalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findFirst: {
            args: Prisma.BalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findMany: {
            args: Prisma.BalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          create: {
            args: Prisma.BalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          createMany: {
            args: Prisma.BalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          delete: {
            args: Prisma.BalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          update: {
            args: Prisma.BalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          deleteMany: {
            args: Prisma.BalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          upsert: {
            args: Prisma.BalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.BalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      Income: {
        payload: Prisma.$IncomePayload<ExtArgs>
        fields: Prisma.IncomeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncomeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncomeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          findFirst: {
            args: Prisma.IncomeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncomeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          findMany: {
            args: Prisma.IncomeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          create: {
            args: Prisma.IncomeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          createMany: {
            args: Prisma.IncomeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncomeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          delete: {
            args: Prisma.IncomeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          update: {
            args: Prisma.IncomeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          deleteMany: {
            args: Prisma.IncomeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncomeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncomeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>[]
          }
          upsert: {
            args: Prisma.IncomeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomePayload>
          }
          aggregate: {
            args: Prisma.IncomeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncome>
          }
          groupBy: {
            args: Prisma.IncomeGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomeGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncomeCountArgs<ExtArgs>
            result: $Utils.Optional<IncomeCountAggregateOutputType> | number
          }
        }
      }
      IncomeSummary: {
        payload: Prisma.$IncomeSummaryPayload<ExtArgs>
        fields: Prisma.IncomeSummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IncomeSummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IncomeSummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload>
          }
          findFirst: {
            args: Prisma.IncomeSummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IncomeSummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload>
          }
          findMany: {
            args: Prisma.IncomeSummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload>[]
          }
          create: {
            args: Prisma.IncomeSummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload>
          }
          createMany: {
            args: Prisma.IncomeSummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IncomeSummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload>[]
          }
          delete: {
            args: Prisma.IncomeSummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload>
          }
          update: {
            args: Prisma.IncomeSummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload>
          }
          deleteMany: {
            args: Prisma.IncomeSummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IncomeSummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IncomeSummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload>[]
          }
          upsert: {
            args: Prisma.IncomeSummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IncomeSummaryPayload>
          }
          aggregate: {
            args: Prisma.IncomeSummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIncomeSummary>
          }
          groupBy: {
            args: Prisma.IncomeSummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<IncomeSummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.IncomeSummaryCountArgs<ExtArgs>
            result: $Utils.Optional<IncomeSummaryCountAggregateOutputType> | number
          }
        }
      }
      ExpenseAnalysis: {
        payload: Prisma.$ExpenseAnalysisPayload<ExtArgs>
        fields: Prisma.ExpenseAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload>
          }
          findFirst: {
            args: Prisma.ExpenseAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload>
          }
          findMany: {
            args: Prisma.ExpenseAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload>[]
          }
          create: {
            args: Prisma.ExpenseAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload>
          }
          createMany: {
            args: Prisma.ExpenseAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload>[]
          }
          delete: {
            args: Prisma.ExpenseAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload>
          }
          update: {
            args: Prisma.ExpenseAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.ExpenseAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.ExpenseAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpenseAnalysisPayload>
          }
          aggregate: {
            args: Prisma.ExpenseAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpenseAnalysis>
          }
          groupBy: {
            args: Prisma.ExpenseAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseAnalysisCountAggregateOutputType> | number
          }
        }
      }
      Forms: {
        payload: Prisma.$FormsPayload<ExtArgs>
        fields: Prisma.FormsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          findFirst: {
            args: Prisma.FormsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          findMany: {
            args: Prisma.FormsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>[]
          }
          create: {
            args: Prisma.FormsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          createMany: {
            args: Prisma.FormsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>[]
          }
          delete: {
            args: Prisma.FormsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          update: {
            args: Prisma.FormsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          deleteMany: {
            args: Prisma.FormsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>[]
          }
          upsert: {
            args: Prisma.FormsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormsPayload>
          }
          aggregate: {
            args: Prisma.FormsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateForms>
          }
          groupBy: {
            args: Prisma.FormsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormsCountArgs<ExtArgs>
            result: $Utils.Optional<FormsCountAggregateOutputType> | number
          }
        }
      }
      FinancialAnalysis: {
        payload: Prisma.$FinancialAnalysisPayload<ExtArgs>
        fields: Prisma.FinancialAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinancialAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinancialAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          findFirst: {
            args: Prisma.FinancialAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinancialAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          findMany: {
            args: Prisma.FinancialAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>[]
          }
          create: {
            args: Prisma.FinancialAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          createMany: {
            args: Prisma.FinancialAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinancialAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>[]
          }
          delete: {
            args: Prisma.FinancialAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          update: {
            args: Prisma.FinancialAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.FinancialAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinancialAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinancialAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.FinancialAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinancialAnalysisPayload>
          }
          aggregate: {
            args: Prisma.FinancialAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinancialAnalysis>
          }
          groupBy: {
            args: Prisma.FinancialAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinancialAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinancialAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<FinancialAnalysisCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    expense?: ExpenseOmit
    category?: CategoryOmit
    goal?: GoalOmit
    balance?: BalanceOmit
    income?: IncomeOmit
    incomeSummary?: IncomeSummaryOmit
    expenseAnalysis?: ExpenseAnalysisOmit
    forms?: FormsOmit
    financialAnalysis?: FinancialAnalysisOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    expenses: number
    expensesAnalysis: number
    financialAnalysis: number
    Forms: number
    goals: number
    incomes: number
    incomesummary: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    expensesAnalysis?: boolean | UserCountOutputTypeCountExpensesAnalysisArgs
    financialAnalysis?: boolean | UserCountOutputTypeCountFinancialAnalysisArgs
    Forms?: boolean | UserCountOutputTypeCountFormsArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    incomes?: boolean | UserCountOutputTypeCountIncomesArgs
    incomesummary?: boolean | UserCountOutputTypeCountIncomesummaryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseAnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinancialAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialAnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIncomesummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeSummaryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    expenses: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | CategoryCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatarUrl: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatarUrl: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    avatarUrl: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    avatarUrl?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    avatarUrl: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
    balance?: boolean | User$balanceArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    expensesAnalysis?: boolean | User$expensesAnalysisArgs<ExtArgs>
    financialAnalysis?: boolean | User$financialAnalysisArgs<ExtArgs>
    Forms?: boolean | User$FormsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    incomes?: boolean | User$incomesArgs<ExtArgs>
    incomesummary?: boolean | User$incomesummaryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    avatarUrl?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatarUrl", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    balance?: boolean | User$balanceArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    expensesAnalysis?: boolean | User$expensesAnalysisArgs<ExtArgs>
    financialAnalysis?: boolean | User$financialAnalysisArgs<ExtArgs>
    Forms?: boolean | User$FormsArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    incomes?: boolean | User$incomesArgs<ExtArgs>
    incomesummary?: boolean | User$incomesummaryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      balance: Prisma.$BalancePayload<ExtArgs> | null
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
      expensesAnalysis: Prisma.$ExpenseAnalysisPayload<ExtArgs>[]
      financialAnalysis: Prisma.$FinancialAnalysisPayload<ExtArgs>[]
      Forms: Prisma.$FormsPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      incomes: Prisma.$IncomePayload<ExtArgs>[]
      incomesummary: Prisma.$IncomeSummaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatarUrl: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    balance<T extends User$balanceArgs<ExtArgs> = {}>(args?: Subset<T, User$balanceArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expensesAnalysis<T extends User$expensesAnalysisArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesAnalysisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    financialAnalysis<T extends User$financialAnalysisArgs<ExtArgs> = {}>(args?: Subset<T, User$financialAnalysisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Forms<T extends User$FormsArgs<ExtArgs> = {}>(args?: Subset<T, User$FormsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomes<T extends User$incomesArgs<ExtArgs> = {}>(args?: Subset<T, User$incomesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    incomesummary<T extends User$incomesummaryArgs<ExtArgs> = {}>(args?: Subset<T, User$incomesummaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.balance
   */
  export type User$balanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    where?: BalanceWhereInput
  }

  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * User.expensesAnalysis
   */
  export type User$expensesAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    where?: ExpenseAnalysisWhereInput
    orderBy?: ExpenseAnalysisOrderByWithRelationInput | ExpenseAnalysisOrderByWithRelationInput[]
    cursor?: ExpenseAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseAnalysisScalarFieldEnum | ExpenseAnalysisScalarFieldEnum[]
  }

  /**
   * User.financialAnalysis
   */
  export type User$financialAnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    where?: FinancialAnalysisWhereInput
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    cursor?: FinancialAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * User.Forms
   */
  export type User$FormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    where?: FormsWhereInput
    orderBy?: FormsOrderByWithRelationInput | FormsOrderByWithRelationInput[]
    cursor?: FormsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.incomes
   */
  export type User$incomesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    where?: IncomeWhereInput
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    cursor?: IncomeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * User.incomesummary
   */
  export type User$incomesummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    where?: IncomeSummaryWhereInput
    orderBy?: IncomeSummaryOrderByWithRelationInput | IncomeSummaryOrderByWithRelationInput[]
    cursor?: IncomeSummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IncomeSummaryScalarFieldEnum | IncomeSummaryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: number | null
    totalInstallments: number | null
    currentInstallment: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: number | null
    totalInstallments: number | null
    currentInstallment: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    date: Date | null
    isCredit: boolean | null
    totalInstallments: number | null
    currentInstallment: number | null
    categoryId: string | null
    userId: string | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    amount: number | null
    date: Date | null
    isCredit: boolean | null
    totalInstallments: number | null
    currentInstallment: number | null
    categoryId: string | null
    userId: string | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    title: number
    amount: number
    date: number
    isCredit: number
    totalInstallments: number
    currentInstallment: number
    categoryId: number
    userId: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
    totalInstallments?: true
    currentInstallment?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
    totalInstallments?: true
    currentInstallment?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    date?: true
    isCredit?: true
    totalInstallments?: true
    currentInstallment?: true
    categoryId?: true
    userId?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    date?: true
    isCredit?: true
    totalInstallments?: true
    currentInstallment?: true
    categoryId?: true
    userId?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    title?: true
    amount?: true
    date?: true
    isCredit?: true
    totalInstallments?: true
    currentInstallment?: true
    categoryId?: true
    userId?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    title: string
    amount: number
    date: Date
    isCredit: boolean
    totalInstallments: number | null
    currentInstallment: number | null
    categoryId: string
    userId: string
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    date?: boolean
    isCredit?: boolean
    totalInstallments?: boolean
    currentInstallment?: boolean
    categoryId?: boolean
    userId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    date?: boolean
    isCredit?: boolean
    totalInstallments?: boolean
    currentInstallment?: boolean
    categoryId?: boolean
    userId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    amount?: boolean
    date?: boolean
    isCredit?: boolean
    totalInstallments?: boolean
    currentInstallment?: boolean
    categoryId?: boolean
    userId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    title?: boolean
    amount?: boolean
    date?: boolean
    isCredit?: boolean
    totalInstallments?: boolean
    currentInstallment?: boolean
    categoryId?: boolean
    userId?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "amount" | "date" | "isCredit" | "totalInstallments" | "currentInstallment" | "categoryId" | "userId", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      amount: number
      date: Date
      isCredit: boolean
      totalInstallments: number | null
      currentInstallment: number | null
      categoryId: string
      userId: string
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly title: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly isCredit: FieldRef<"Expense", 'Boolean'>
    readonly totalInstallments: FieldRef<"Expense", 'Int'>
    readonly currentInstallment: FieldRef<"Expense", 'Int'>
    readonly categoryId: FieldRef<"Expense", 'String'>
    readonly userId: FieldRef<"Expense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    color: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    color: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    color: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    expenses?: boolean | Category$expensesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | Category$expensesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      color: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    expenses<T extends Category$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Category$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly color: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.expenses
   */
  export type Category$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    target: number | null
    progress: number | null
  }

  export type GoalSumAggregateOutputType = {
    target: number | null
    progress: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: string | null
    title: string | null
    target: number | null
    progress: number | null
    status: $Enums.GoalStatus | null
    userId: string | null
    createdAt: Date | null
    category: string | null
    imageUrl: string | null
  }

  export type GoalMaxAggregateOutputType = {
    id: string | null
    title: string | null
    target: number | null
    progress: number | null
    status: $Enums.GoalStatus | null
    userId: string | null
    createdAt: Date | null
    category: string | null
    imageUrl: string | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    title: number
    target: number
    progress: number
    status: number
    userId: number
    createdAt: number
    category: number
    imageUrl: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    target?: true
    progress?: true
  }

  export type GoalSumAggregateInputType = {
    target?: true
    progress?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    title?: true
    target?: true
    progress?: true
    status?: true
    userId?: true
    createdAt?: true
    category?: true
    imageUrl?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    title?: true
    target?: true
    progress?: true
    status?: true
    userId?: true
    createdAt?: true
    category?: true
    imageUrl?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    title?: true
    target?: true
    progress?: true
    status?: true
    userId?: true
    createdAt?: true
    category?: true
    imageUrl?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: string
    title: string
    target: number
    progress: number
    status: $Enums.GoalStatus
    userId: string
    createdAt: Date
    category: string | null
    imageUrl: string | null
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    target?: boolean
    progress?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    category?: boolean
    imageUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    target?: boolean
    progress?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    category?: boolean
    imageUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    target?: boolean
    progress?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    category?: boolean
    imageUrl?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    title?: boolean
    target?: boolean
    progress?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    category?: boolean
    imageUrl?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "target" | "progress" | "status" | "userId" | "createdAt" | "category" | "imageUrl", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      target: number
      progress: number
      status: $Enums.GoalStatus
      userId: string
      createdAt: Date
      category: string | null
      imageUrl: string | null
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'String'>
    readonly title: FieldRef<"Goal", 'String'>
    readonly target: FieldRef<"Goal", 'Float'>
    readonly progress: FieldRef<"Goal", 'Float'>
    readonly status: FieldRef<"Goal", 'GoalStatus'>
    readonly userId: FieldRef<"Goal", 'String'>
    readonly createdAt: FieldRef<"Goal", 'DateTime'>
    readonly category: FieldRef<"Goal", 'String'>
    readonly imageUrl: FieldRef<"Goal", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    value: number | null
  }

  export type BalanceSumAggregateOutputType = {
    value: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: string | null
    value: number | null
    date: Date | null
    userId: string | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: string | null
    value: number | null
    date: Date | null
    userId: string | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    value: number
    date: number
    userId: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    value?: true
  }

  export type BalanceSumAggregateInputType = {
    value?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    value?: true
    date?: true
    userId?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    value?: true
    date?: true
    userId?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    value?: true
    date?: true
    userId?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balance to aggregate.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type BalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithAggregationInput | BalanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: BalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: string
    value: number
    date: Date
    userId: string
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectScalar = {
    id?: boolean
    value?: boolean
    date?: boolean
    userId?: boolean
  }

  export type BalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "date" | "userId", ExtArgs["result"]["balance"]>
  export type BalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: number
      date: Date
      userId: string
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type BalanceGetPayload<S extends boolean | null | undefined | BalanceDefaultArgs> = $Result.GetResult<Prisma.$BalancePayload, S>

  type BalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface BalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balance'], meta: { name: 'Balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceFindUniqueArgs>(args: SelectSubset<T, BalanceFindUniqueArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceFindFirstArgs>(args?: SelectSubset<T, BalanceFindFirstArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceFindManyArgs>(args?: SelectSubset<T, BalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balance.
     * @param {BalanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends BalanceCreateArgs>(args: SelectSubset<T, BalanceCreateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceCreateManyArgs>(args?: SelectSubset<T, BalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {BalanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balance.
     * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends BalanceDeleteArgs>(args: SelectSubset<T, BalanceDeleteArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balance.
     * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceUpdateArgs>(args: SelectSubset<T, BalanceUpdateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceDeleteManyArgs>(args?: SelectSubset<T, BalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceUpdateManyArgs>(args: SelectSubset<T, BalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {BalanceUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balance.
     * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends BalanceUpsertArgs>(args: SelectSubset<T, BalanceUpsertArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalanceCountArgs>(
      args?: Subset<T, BalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceGroupByArgs['orderBy'] }
        : { orderBy?: BalanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balance model
   */
  readonly fields: BalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Balance model
   */
  interface BalanceFieldRefs {
    readonly id: FieldRef<"Balance", 'String'>
    readonly value: FieldRef<"Balance", 'Float'>
    readonly date: FieldRef<"Balance", 'DateTime'>
    readonly userId: FieldRef<"Balance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Balance findUnique
   */
  export type BalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findUniqueOrThrow
   */
  export type BalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findFirst
   */
  export type BalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findFirstOrThrow
   */
  export type BalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findMany
   */
  export type BalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance create
   */
  export type BalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Balance.
     */
    data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
  }

  /**
   * Balance createMany
   */
  export type BalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balance createManyAndReturn
   */
  export type BalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance update
   */
  export type BalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Balance.
     */
    data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    /**
     * Choose, which Balance to update.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance updateMany
   */
  export type BalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
  }

  /**
   * Balance updateManyAndReturn
   */
  export type BalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance upsert
   */
  export type BalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Balance to update in case it exists.
     */
    where: BalanceWhereUniqueInput
    /**
     * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
     */
    create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    /**
     * In case the Balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
  }

  /**
   * Balance delete
   */
  export type BalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter which Balance to delete.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance deleteMany
   */
  export type BalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to delete
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to delete.
     */
    limit?: number
  }

  /**
   * Balance without action
   */
  export type BalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
  }


  /**
   * Model Income
   */

  export type AggregateIncome = {
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  export type IncomeAvgAggregateOutputType = {
    income: number | null
    extraincome: number | null
    otherincome: number | null
  }

  export type IncomeSumAggregateOutputType = {
    income: number | null
    extraincome: number | null
    otherincome: number | null
  }

  export type IncomeMinAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    income: number | null
    extraincome: number | null
    otherincome: number | null
    month: Date | null
  }

  export type IncomeMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    userId: string | null
    income: number | null
    extraincome: number | null
    otherincome: number | null
    month: Date | null
  }

  export type IncomeCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    income: number
    extraincome: number
    otherincome: number
    month: number
    _all: number
  }


  export type IncomeAvgAggregateInputType = {
    income?: true
    extraincome?: true
    otherincome?: true
  }

  export type IncomeSumAggregateInputType = {
    income?: true
    extraincome?: true
    otherincome?: true
  }

  export type IncomeMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    income?: true
    extraincome?: true
    otherincome?: true
    month?: true
  }

  export type IncomeMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    income?: true
    extraincome?: true
    otherincome?: true
    month?: true
  }

  export type IncomeCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    income?: true
    extraincome?: true
    otherincome?: true
    month?: true
    _all?: true
  }

  export type IncomeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Income to aggregate.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Incomes
    **/
    _count?: true | IncomeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomeMaxAggregateInputType
  }

  export type GetIncomeAggregateType<T extends IncomeAggregateArgs> = {
        [P in keyof T & keyof AggregateIncome]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncome[P]>
      : GetScalarType<T[P], AggregateIncome[P]>
  }




  export type IncomeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeWhereInput
    orderBy?: IncomeOrderByWithAggregationInput | IncomeOrderByWithAggregationInput[]
    by: IncomeScalarFieldEnum[] | IncomeScalarFieldEnum
    having?: IncomeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomeCountAggregateInputType | true
    _avg?: IncomeAvgAggregateInputType
    _sum?: IncomeSumAggregateInputType
    _min?: IncomeMinAggregateInputType
    _max?: IncomeMaxAggregateInputType
  }

  export type IncomeGroupByOutputType = {
    id: string
    date: Date
    userId: string
    income: number
    extraincome: number
    otherincome: number
    month: Date
    _count: IncomeCountAggregateOutputType | null
    _avg: IncomeAvgAggregateOutputType | null
    _sum: IncomeSumAggregateOutputType | null
    _min: IncomeMinAggregateOutputType | null
    _max: IncomeMaxAggregateOutputType | null
  }

  type GetIncomeGroupByPayload<T extends IncomeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomeGroupByOutputType[P]>
            : GetScalarType<T[P], IncomeGroupByOutputType[P]>
        }
      >
    >


  export type IncomeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    income?: boolean
    extraincome?: boolean
    otherincome?: boolean
    month?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    income?: boolean
    extraincome?: boolean
    otherincome?: boolean
    month?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    income?: boolean
    extraincome?: boolean
    otherincome?: boolean
    month?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["income"]>

  export type IncomeSelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
    income?: boolean
    extraincome?: boolean
    otherincome?: boolean
    month?: boolean
  }

  export type IncomeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "userId" | "income" | "extraincome" | "otherincome" | "month", ExtArgs["result"]["income"]>
  export type IncomeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncomeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncomeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncomePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Income"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      userId: string
      income: number
      extraincome: number
      otherincome: number
      month: Date
    }, ExtArgs["result"]["income"]>
    composites: {}
  }

  type IncomeGetPayload<S extends boolean | null | undefined | IncomeDefaultArgs> = $Result.GetResult<Prisma.$IncomePayload, S>

  type IncomeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncomeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncomeCountAggregateInputType | true
    }

  export interface IncomeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Income'], meta: { name: 'Income' } }
    /**
     * Find zero or one Income that matches the filter.
     * @param {IncomeFindUniqueArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncomeFindUniqueArgs>(args: SelectSubset<T, IncomeFindUniqueArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Income that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncomeFindUniqueOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncomeFindUniqueOrThrowArgs>(args: SelectSubset<T, IncomeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindFirstArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncomeFindFirstArgs>(args?: SelectSubset<T, IncomeFindFirstArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Income that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindFirstOrThrowArgs} args - Arguments to find a Income
     * @example
     * // Get one Income
     * const income = await prisma.income.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncomeFindFirstOrThrowArgs>(args?: SelectSubset<T, IncomeFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Incomes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Incomes
     * const incomes = await prisma.income.findMany()
     * 
     * // Get first 10 Incomes
     * const incomes = await prisma.income.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomeWithIdOnly = await prisma.income.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncomeFindManyArgs>(args?: SelectSubset<T, IncomeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Income.
     * @param {IncomeCreateArgs} args - Arguments to create a Income.
     * @example
     * // Create one Income
     * const Income = await prisma.income.create({
     *   data: {
     *     // ... data to create a Income
     *   }
     * })
     * 
     */
    create<T extends IncomeCreateArgs>(args: SelectSubset<T, IncomeCreateArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Incomes.
     * @param {IncomeCreateManyArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncomeCreateManyArgs>(args?: SelectSubset<T, IncomeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Incomes and returns the data saved in the database.
     * @param {IncomeCreateManyAndReturnArgs} args - Arguments to create many Incomes.
     * @example
     * // Create many Incomes
     * const income = await prisma.income.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Incomes and only return the `id`
     * const incomeWithIdOnly = await prisma.income.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncomeCreateManyAndReturnArgs>(args?: SelectSubset<T, IncomeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Income.
     * @param {IncomeDeleteArgs} args - Arguments to delete one Income.
     * @example
     * // Delete one Income
     * const Income = await prisma.income.delete({
     *   where: {
     *     // ... filter to delete one Income
     *   }
     * })
     * 
     */
    delete<T extends IncomeDeleteArgs>(args: SelectSubset<T, IncomeDeleteArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Income.
     * @param {IncomeUpdateArgs} args - Arguments to update one Income.
     * @example
     * // Update one Income
     * const income = await prisma.income.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncomeUpdateArgs>(args: SelectSubset<T, IncomeUpdateArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Incomes.
     * @param {IncomeDeleteManyArgs} args - Arguments to filter Incomes to delete.
     * @example
     * // Delete a few Incomes
     * const { count } = await prisma.income.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncomeDeleteManyArgs>(args?: SelectSubset<T, IncomeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncomeUpdateManyArgs>(args: SelectSubset<T, IncomeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Incomes and returns the data updated in the database.
     * @param {IncomeUpdateManyAndReturnArgs} args - Arguments to update many Incomes.
     * @example
     * // Update many Incomes
     * const income = await prisma.income.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Incomes and only return the `id`
     * const incomeWithIdOnly = await prisma.income.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncomeUpdateManyAndReturnArgs>(args: SelectSubset<T, IncomeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Income.
     * @param {IncomeUpsertArgs} args - Arguments to update or create a Income.
     * @example
     * // Update or create a Income
     * const income = await prisma.income.upsert({
     *   create: {
     *     // ... data to create a Income
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Income we want to update
     *   }
     * })
     */
    upsert<T extends IncomeUpsertArgs>(args: SelectSubset<T, IncomeUpsertArgs<ExtArgs>>): Prisma__IncomeClient<$Result.GetResult<Prisma.$IncomePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Incomes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeCountArgs} args - Arguments to filter Incomes to count.
     * @example
     * // Count the number of Incomes
     * const count = await prisma.income.count({
     *   where: {
     *     // ... the filter for the Incomes we want to count
     *   }
     * })
    **/
    count<T extends IncomeCountArgs>(
      args?: Subset<T, IncomeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncomeAggregateArgs>(args: Subset<T, IncomeAggregateArgs>): Prisma.PrismaPromise<GetIncomeAggregateType<T>>

    /**
     * Group by Income.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncomeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncomeGroupByArgs['orderBy'] }
        : { orderBy?: IncomeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncomeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Income model
   */
  readonly fields: IncomeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Income.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncomeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Income model
   */
  interface IncomeFieldRefs {
    readonly id: FieldRef<"Income", 'String'>
    readonly date: FieldRef<"Income", 'DateTime'>
    readonly userId: FieldRef<"Income", 'String'>
    readonly income: FieldRef<"Income", 'Float'>
    readonly extraincome: FieldRef<"Income", 'Float'>
    readonly otherincome: FieldRef<"Income", 'Float'>
    readonly month: FieldRef<"Income", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Income findUnique
   */
  export type IncomeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income findUniqueOrThrow
   */
  export type IncomeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income findFirst
   */
  export type IncomeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income findFirstOrThrow
   */
  export type IncomeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Income to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Incomes.
     */
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income findMany
   */
  export type IncomeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter, which Incomes to fetch.
     */
    where?: IncomeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Incomes to fetch.
     */
    orderBy?: IncomeOrderByWithRelationInput | IncomeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Incomes.
     */
    cursor?: IncomeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Incomes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Incomes.
     */
    skip?: number
    distinct?: IncomeScalarFieldEnum | IncomeScalarFieldEnum[]
  }

  /**
   * Income create
   */
  export type IncomeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The data needed to create a Income.
     */
    data: XOR<IncomeCreateInput, IncomeUncheckedCreateInput>
  }

  /**
   * Income createMany
   */
  export type IncomeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Incomes.
     */
    data: IncomeCreateManyInput | IncomeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Income createManyAndReturn
   */
  export type IncomeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * The data used to create many Incomes.
     */
    data: IncomeCreateManyInput | IncomeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Income update
   */
  export type IncomeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The data needed to update a Income.
     */
    data: XOR<IncomeUpdateInput, IncomeUncheckedUpdateInput>
    /**
     * Choose, which Income to update.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income updateMany
   */
  export type IncomeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Incomes.
     */
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyInput>
    /**
     * Filter which Incomes to update
     */
    where?: IncomeWhereInput
    /**
     * Limit how many Incomes to update.
     */
    limit?: number
  }

  /**
   * Income updateManyAndReturn
   */
  export type IncomeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * The data used to update Incomes.
     */
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyInput>
    /**
     * Filter which Incomes to update
     */
    where?: IncomeWhereInput
    /**
     * Limit how many Incomes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Income upsert
   */
  export type IncomeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * The filter to search for the Income to update in case it exists.
     */
    where: IncomeWhereUniqueInput
    /**
     * In case the Income found by the `where` argument doesn't exist, create a new Income with this data.
     */
    create: XOR<IncomeCreateInput, IncomeUncheckedCreateInput>
    /**
     * In case the Income was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncomeUpdateInput, IncomeUncheckedUpdateInput>
  }

  /**
   * Income delete
   */
  export type IncomeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
    /**
     * Filter which Income to delete.
     */
    where: IncomeWhereUniqueInput
  }

  /**
   * Income deleteMany
   */
  export type IncomeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Incomes to delete
     */
    where?: IncomeWhereInput
    /**
     * Limit how many Incomes to delete.
     */
    limit?: number
  }

  /**
   * Income without action
   */
  export type IncomeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Income
     */
    select?: IncomeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Income
     */
    omit?: IncomeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeInclude<ExtArgs> | null
  }


  /**
   * Model IncomeSummary
   */

  export type AggregateIncomeSummary = {
    _count: IncomeSummaryCountAggregateOutputType | null
    _avg: IncomeSummaryAvgAggregateOutputType | null
    _sum: IncomeSummarySumAggregateOutputType | null
    _min: IncomeSummaryMinAggregateOutputType | null
    _max: IncomeSummaryMaxAggregateOutputType | null
  }

  export type IncomeSummaryAvgAggregateOutputType = {
    total: number | null
    impostoRenda: number | null
  }

  export type IncomeSummarySumAggregateOutputType = {
    total: number | null
    impostoRenda: number | null
  }

  export type IncomeSummaryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    total: number | null
    impostoRenda: number | null
    createdAt: Date | null
    month: Date | null
  }

  export type IncomeSummaryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    total: number | null
    impostoRenda: number | null
    createdAt: Date | null
    month: Date | null
  }

  export type IncomeSummaryCountAggregateOutputType = {
    id: number
    userId: number
    total: number
    impostoRenda: number
    createdAt: number
    month: number
    _all: number
  }


  export type IncomeSummaryAvgAggregateInputType = {
    total?: true
    impostoRenda?: true
  }

  export type IncomeSummarySumAggregateInputType = {
    total?: true
    impostoRenda?: true
  }

  export type IncomeSummaryMinAggregateInputType = {
    id?: true
    userId?: true
    total?: true
    impostoRenda?: true
    createdAt?: true
    month?: true
  }

  export type IncomeSummaryMaxAggregateInputType = {
    id?: true
    userId?: true
    total?: true
    impostoRenda?: true
    createdAt?: true
    month?: true
  }

  export type IncomeSummaryCountAggregateInputType = {
    id?: true
    userId?: true
    total?: true
    impostoRenda?: true
    createdAt?: true
    month?: true
    _all?: true
  }

  export type IncomeSummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncomeSummary to aggregate.
     */
    where?: IncomeSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomeSummaries to fetch.
     */
    orderBy?: IncomeSummaryOrderByWithRelationInput | IncomeSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IncomeSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomeSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomeSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IncomeSummaries
    **/
    _count?: true | IncomeSummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IncomeSummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IncomeSummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IncomeSummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IncomeSummaryMaxAggregateInputType
  }

  export type GetIncomeSummaryAggregateType<T extends IncomeSummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateIncomeSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIncomeSummary[P]>
      : GetScalarType<T[P], AggregateIncomeSummary[P]>
  }




  export type IncomeSummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IncomeSummaryWhereInput
    orderBy?: IncomeSummaryOrderByWithAggregationInput | IncomeSummaryOrderByWithAggregationInput[]
    by: IncomeSummaryScalarFieldEnum[] | IncomeSummaryScalarFieldEnum
    having?: IncomeSummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IncomeSummaryCountAggregateInputType | true
    _avg?: IncomeSummaryAvgAggregateInputType
    _sum?: IncomeSummarySumAggregateInputType
    _min?: IncomeSummaryMinAggregateInputType
    _max?: IncomeSummaryMaxAggregateInputType
  }

  export type IncomeSummaryGroupByOutputType = {
    id: string
    userId: string
    total: number
    impostoRenda: number
    createdAt: Date
    month: Date
    _count: IncomeSummaryCountAggregateOutputType | null
    _avg: IncomeSummaryAvgAggregateOutputType | null
    _sum: IncomeSummarySumAggregateOutputType | null
    _min: IncomeSummaryMinAggregateOutputType | null
    _max: IncomeSummaryMaxAggregateOutputType | null
  }

  type GetIncomeSummaryGroupByPayload<T extends IncomeSummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IncomeSummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IncomeSummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IncomeSummaryGroupByOutputType[P]>
            : GetScalarType<T[P], IncomeSummaryGroupByOutputType[P]>
        }
      >
    >


  export type IncomeSummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    total?: boolean
    impostoRenda?: boolean
    createdAt?: boolean
    month?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomeSummary"]>

  export type IncomeSummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    total?: boolean
    impostoRenda?: boolean
    createdAt?: boolean
    month?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomeSummary"]>

  export type IncomeSummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    total?: boolean
    impostoRenda?: boolean
    createdAt?: boolean
    month?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["incomeSummary"]>

  export type IncomeSummarySelectScalar = {
    id?: boolean
    userId?: boolean
    total?: boolean
    impostoRenda?: boolean
    createdAt?: boolean
    month?: boolean
  }

  export type IncomeSummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "total" | "impostoRenda" | "createdAt" | "month", ExtArgs["result"]["incomeSummary"]>
  export type IncomeSummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncomeSummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type IncomeSummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $IncomeSummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IncomeSummary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      total: number
      impostoRenda: number
      createdAt: Date
      month: Date
    }, ExtArgs["result"]["incomeSummary"]>
    composites: {}
  }

  type IncomeSummaryGetPayload<S extends boolean | null | undefined | IncomeSummaryDefaultArgs> = $Result.GetResult<Prisma.$IncomeSummaryPayload, S>

  type IncomeSummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IncomeSummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IncomeSummaryCountAggregateInputType | true
    }

  export interface IncomeSummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IncomeSummary'], meta: { name: 'IncomeSummary' } }
    /**
     * Find zero or one IncomeSummary that matches the filter.
     * @param {IncomeSummaryFindUniqueArgs} args - Arguments to find a IncomeSummary
     * @example
     * // Get one IncomeSummary
     * const incomeSummary = await prisma.incomeSummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IncomeSummaryFindUniqueArgs>(args: SelectSubset<T, IncomeSummaryFindUniqueArgs<ExtArgs>>): Prisma__IncomeSummaryClient<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IncomeSummary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IncomeSummaryFindUniqueOrThrowArgs} args - Arguments to find a IncomeSummary
     * @example
     * // Get one IncomeSummary
     * const incomeSummary = await prisma.incomeSummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IncomeSummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, IncomeSummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IncomeSummaryClient<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncomeSummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeSummaryFindFirstArgs} args - Arguments to find a IncomeSummary
     * @example
     * // Get one IncomeSummary
     * const incomeSummary = await prisma.incomeSummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IncomeSummaryFindFirstArgs>(args?: SelectSubset<T, IncomeSummaryFindFirstArgs<ExtArgs>>): Prisma__IncomeSummaryClient<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IncomeSummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeSummaryFindFirstOrThrowArgs} args - Arguments to find a IncomeSummary
     * @example
     * // Get one IncomeSummary
     * const incomeSummary = await prisma.incomeSummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IncomeSummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, IncomeSummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__IncomeSummaryClient<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IncomeSummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeSummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IncomeSummaries
     * const incomeSummaries = await prisma.incomeSummary.findMany()
     * 
     * // Get first 10 IncomeSummaries
     * const incomeSummaries = await prisma.incomeSummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const incomeSummaryWithIdOnly = await prisma.incomeSummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IncomeSummaryFindManyArgs>(args?: SelectSubset<T, IncomeSummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IncomeSummary.
     * @param {IncomeSummaryCreateArgs} args - Arguments to create a IncomeSummary.
     * @example
     * // Create one IncomeSummary
     * const IncomeSummary = await prisma.incomeSummary.create({
     *   data: {
     *     // ... data to create a IncomeSummary
     *   }
     * })
     * 
     */
    create<T extends IncomeSummaryCreateArgs>(args: SelectSubset<T, IncomeSummaryCreateArgs<ExtArgs>>): Prisma__IncomeSummaryClient<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IncomeSummaries.
     * @param {IncomeSummaryCreateManyArgs} args - Arguments to create many IncomeSummaries.
     * @example
     * // Create many IncomeSummaries
     * const incomeSummary = await prisma.incomeSummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IncomeSummaryCreateManyArgs>(args?: SelectSubset<T, IncomeSummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IncomeSummaries and returns the data saved in the database.
     * @param {IncomeSummaryCreateManyAndReturnArgs} args - Arguments to create many IncomeSummaries.
     * @example
     * // Create many IncomeSummaries
     * const incomeSummary = await prisma.incomeSummary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IncomeSummaries and only return the `id`
     * const incomeSummaryWithIdOnly = await prisma.incomeSummary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IncomeSummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, IncomeSummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IncomeSummary.
     * @param {IncomeSummaryDeleteArgs} args - Arguments to delete one IncomeSummary.
     * @example
     * // Delete one IncomeSummary
     * const IncomeSummary = await prisma.incomeSummary.delete({
     *   where: {
     *     // ... filter to delete one IncomeSummary
     *   }
     * })
     * 
     */
    delete<T extends IncomeSummaryDeleteArgs>(args: SelectSubset<T, IncomeSummaryDeleteArgs<ExtArgs>>): Prisma__IncomeSummaryClient<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IncomeSummary.
     * @param {IncomeSummaryUpdateArgs} args - Arguments to update one IncomeSummary.
     * @example
     * // Update one IncomeSummary
     * const incomeSummary = await prisma.incomeSummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IncomeSummaryUpdateArgs>(args: SelectSubset<T, IncomeSummaryUpdateArgs<ExtArgs>>): Prisma__IncomeSummaryClient<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IncomeSummaries.
     * @param {IncomeSummaryDeleteManyArgs} args - Arguments to filter IncomeSummaries to delete.
     * @example
     * // Delete a few IncomeSummaries
     * const { count } = await prisma.incomeSummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IncomeSummaryDeleteManyArgs>(args?: SelectSubset<T, IncomeSummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncomeSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeSummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IncomeSummaries
     * const incomeSummary = await prisma.incomeSummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IncomeSummaryUpdateManyArgs>(args: SelectSubset<T, IncomeSummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IncomeSummaries and returns the data updated in the database.
     * @param {IncomeSummaryUpdateManyAndReturnArgs} args - Arguments to update many IncomeSummaries.
     * @example
     * // Update many IncomeSummaries
     * const incomeSummary = await prisma.incomeSummary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IncomeSummaries and only return the `id`
     * const incomeSummaryWithIdOnly = await prisma.incomeSummary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IncomeSummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, IncomeSummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IncomeSummary.
     * @param {IncomeSummaryUpsertArgs} args - Arguments to update or create a IncomeSummary.
     * @example
     * // Update or create a IncomeSummary
     * const incomeSummary = await prisma.incomeSummary.upsert({
     *   create: {
     *     // ... data to create a IncomeSummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IncomeSummary we want to update
     *   }
     * })
     */
    upsert<T extends IncomeSummaryUpsertArgs>(args: SelectSubset<T, IncomeSummaryUpsertArgs<ExtArgs>>): Prisma__IncomeSummaryClient<$Result.GetResult<Prisma.$IncomeSummaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IncomeSummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeSummaryCountArgs} args - Arguments to filter IncomeSummaries to count.
     * @example
     * // Count the number of IncomeSummaries
     * const count = await prisma.incomeSummary.count({
     *   where: {
     *     // ... the filter for the IncomeSummaries we want to count
     *   }
     * })
    **/
    count<T extends IncomeSummaryCountArgs>(
      args?: Subset<T, IncomeSummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IncomeSummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IncomeSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeSummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IncomeSummaryAggregateArgs>(args: Subset<T, IncomeSummaryAggregateArgs>): Prisma.PrismaPromise<GetIncomeSummaryAggregateType<T>>

    /**
     * Group by IncomeSummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IncomeSummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IncomeSummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IncomeSummaryGroupByArgs['orderBy'] }
        : { orderBy?: IncomeSummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IncomeSummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIncomeSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IncomeSummary model
   */
  readonly fields: IncomeSummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IncomeSummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IncomeSummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IncomeSummary model
   */
  interface IncomeSummaryFieldRefs {
    readonly id: FieldRef<"IncomeSummary", 'String'>
    readonly userId: FieldRef<"IncomeSummary", 'String'>
    readonly total: FieldRef<"IncomeSummary", 'Float'>
    readonly impostoRenda: FieldRef<"IncomeSummary", 'Float'>
    readonly createdAt: FieldRef<"IncomeSummary", 'DateTime'>
    readonly month: FieldRef<"IncomeSummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * IncomeSummary findUnique
   */
  export type IncomeSummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    /**
     * Filter, which IncomeSummary to fetch.
     */
    where: IncomeSummaryWhereUniqueInput
  }

  /**
   * IncomeSummary findUniqueOrThrow
   */
  export type IncomeSummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    /**
     * Filter, which IncomeSummary to fetch.
     */
    where: IncomeSummaryWhereUniqueInput
  }

  /**
   * IncomeSummary findFirst
   */
  export type IncomeSummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    /**
     * Filter, which IncomeSummary to fetch.
     */
    where?: IncomeSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomeSummaries to fetch.
     */
    orderBy?: IncomeSummaryOrderByWithRelationInput | IncomeSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncomeSummaries.
     */
    cursor?: IncomeSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomeSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomeSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncomeSummaries.
     */
    distinct?: IncomeSummaryScalarFieldEnum | IncomeSummaryScalarFieldEnum[]
  }

  /**
   * IncomeSummary findFirstOrThrow
   */
  export type IncomeSummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    /**
     * Filter, which IncomeSummary to fetch.
     */
    where?: IncomeSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomeSummaries to fetch.
     */
    orderBy?: IncomeSummaryOrderByWithRelationInput | IncomeSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IncomeSummaries.
     */
    cursor?: IncomeSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomeSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomeSummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IncomeSummaries.
     */
    distinct?: IncomeSummaryScalarFieldEnum | IncomeSummaryScalarFieldEnum[]
  }

  /**
   * IncomeSummary findMany
   */
  export type IncomeSummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    /**
     * Filter, which IncomeSummaries to fetch.
     */
    where?: IncomeSummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IncomeSummaries to fetch.
     */
    orderBy?: IncomeSummaryOrderByWithRelationInput | IncomeSummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IncomeSummaries.
     */
    cursor?: IncomeSummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IncomeSummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IncomeSummaries.
     */
    skip?: number
    distinct?: IncomeSummaryScalarFieldEnum | IncomeSummaryScalarFieldEnum[]
  }

  /**
   * IncomeSummary create
   */
  export type IncomeSummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a IncomeSummary.
     */
    data: XOR<IncomeSummaryCreateInput, IncomeSummaryUncheckedCreateInput>
  }

  /**
   * IncomeSummary createMany
   */
  export type IncomeSummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IncomeSummaries.
     */
    data: IncomeSummaryCreateManyInput | IncomeSummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IncomeSummary createManyAndReturn
   */
  export type IncomeSummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * The data used to create many IncomeSummaries.
     */
    data: IncomeSummaryCreateManyInput | IncomeSummaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncomeSummary update
   */
  export type IncomeSummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a IncomeSummary.
     */
    data: XOR<IncomeSummaryUpdateInput, IncomeSummaryUncheckedUpdateInput>
    /**
     * Choose, which IncomeSummary to update.
     */
    where: IncomeSummaryWhereUniqueInput
  }

  /**
   * IncomeSummary updateMany
   */
  export type IncomeSummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IncomeSummaries.
     */
    data: XOR<IncomeSummaryUpdateManyMutationInput, IncomeSummaryUncheckedUpdateManyInput>
    /**
     * Filter which IncomeSummaries to update
     */
    where?: IncomeSummaryWhereInput
    /**
     * Limit how many IncomeSummaries to update.
     */
    limit?: number
  }

  /**
   * IncomeSummary updateManyAndReturn
   */
  export type IncomeSummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * The data used to update IncomeSummaries.
     */
    data: XOR<IncomeSummaryUpdateManyMutationInput, IncomeSummaryUncheckedUpdateManyInput>
    /**
     * Filter which IncomeSummaries to update
     */
    where?: IncomeSummaryWhereInput
    /**
     * Limit how many IncomeSummaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * IncomeSummary upsert
   */
  export type IncomeSummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the IncomeSummary to update in case it exists.
     */
    where: IncomeSummaryWhereUniqueInput
    /**
     * In case the IncomeSummary found by the `where` argument doesn't exist, create a new IncomeSummary with this data.
     */
    create: XOR<IncomeSummaryCreateInput, IncomeSummaryUncheckedCreateInput>
    /**
     * In case the IncomeSummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IncomeSummaryUpdateInput, IncomeSummaryUncheckedUpdateInput>
  }

  /**
   * IncomeSummary delete
   */
  export type IncomeSummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
    /**
     * Filter which IncomeSummary to delete.
     */
    where: IncomeSummaryWhereUniqueInput
  }

  /**
   * IncomeSummary deleteMany
   */
  export type IncomeSummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IncomeSummaries to delete
     */
    where?: IncomeSummaryWhereInput
    /**
     * Limit how many IncomeSummaries to delete.
     */
    limit?: number
  }

  /**
   * IncomeSummary without action
   */
  export type IncomeSummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IncomeSummary
     */
    select?: IncomeSummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the IncomeSummary
     */
    omit?: IncomeSummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IncomeSummaryInclude<ExtArgs> | null
  }


  /**
   * Model ExpenseAnalysis
   */

  export type AggregateExpenseAnalysis = {
    _count: ExpenseAnalysisCountAggregateOutputType | null
    _avg: ExpenseAnalysisAvgAggregateOutputType | null
    _sum: ExpenseAnalysisSumAggregateOutputType | null
    _min: ExpenseAnalysisMinAggregateOutputType | null
    _max: ExpenseAnalysisMaxAggregateOutputType | null
  }

  export type ExpenseAnalysisAvgAggregateOutputType = {
    total: number | null
    categoriaMaiorGasto: number | null
    diferencamensal: number | null
  }

  export type ExpenseAnalysisSumAggregateOutputType = {
    total: number | null
    categoriaMaiorGasto: number | null
    diferencamensal: number | null
  }

  export type ExpenseAnalysisMinAggregateOutputType = {
    id: string | null
    userId: string | null
    total: number | null
    categoriaMaiorGasto: number | null
    diferencamensal: number | null
    createdAt: Date | null
  }

  export type ExpenseAnalysisMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    total: number | null
    categoriaMaiorGasto: number | null
    diferencamensal: number | null
    createdAt: Date | null
  }

  export type ExpenseAnalysisCountAggregateOutputType = {
    id: number
    userId: number
    total: number
    categoriaMaiorGasto: number
    diferencamensal: number
    createdAt: number
    _all: number
  }


  export type ExpenseAnalysisAvgAggregateInputType = {
    total?: true
    categoriaMaiorGasto?: true
    diferencamensal?: true
  }

  export type ExpenseAnalysisSumAggregateInputType = {
    total?: true
    categoriaMaiorGasto?: true
    diferencamensal?: true
  }

  export type ExpenseAnalysisMinAggregateInputType = {
    id?: true
    userId?: true
    total?: true
    categoriaMaiorGasto?: true
    diferencamensal?: true
    createdAt?: true
  }

  export type ExpenseAnalysisMaxAggregateInputType = {
    id?: true
    userId?: true
    total?: true
    categoriaMaiorGasto?: true
    diferencamensal?: true
    createdAt?: true
  }

  export type ExpenseAnalysisCountAggregateInputType = {
    id?: true
    userId?: true
    total?: true
    categoriaMaiorGasto?: true
    diferencamensal?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseAnalysis to aggregate.
     */
    where?: ExpenseAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseAnalyses to fetch.
     */
    orderBy?: ExpenseAnalysisOrderByWithRelationInput | ExpenseAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExpenseAnalyses
    **/
    _count?: true | ExpenseAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseAnalysisMaxAggregateInputType
  }

  export type GetExpenseAnalysisAggregateType<T extends ExpenseAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateExpenseAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpenseAnalysis[P]>
      : GetScalarType<T[P], AggregateExpenseAnalysis[P]>
  }




  export type ExpenseAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseAnalysisWhereInput
    orderBy?: ExpenseAnalysisOrderByWithAggregationInput | ExpenseAnalysisOrderByWithAggregationInput[]
    by: ExpenseAnalysisScalarFieldEnum[] | ExpenseAnalysisScalarFieldEnum
    having?: ExpenseAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseAnalysisCountAggregateInputType | true
    _avg?: ExpenseAnalysisAvgAggregateInputType
    _sum?: ExpenseAnalysisSumAggregateInputType
    _min?: ExpenseAnalysisMinAggregateInputType
    _max?: ExpenseAnalysisMaxAggregateInputType
  }

  export type ExpenseAnalysisGroupByOutputType = {
    id: string
    userId: string
    total: number
    categoriaMaiorGasto: number
    diferencamensal: number
    createdAt: Date
    _count: ExpenseAnalysisCountAggregateOutputType | null
    _avg: ExpenseAnalysisAvgAggregateOutputType | null
    _sum: ExpenseAnalysisSumAggregateOutputType | null
    _min: ExpenseAnalysisMinAggregateOutputType | null
    _max: ExpenseAnalysisMaxAggregateOutputType | null
  }

  type GetExpenseAnalysisGroupByPayload<T extends ExpenseAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    total?: boolean
    categoriaMaiorGasto?: boolean
    diferencamensal?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseAnalysis"]>

  export type ExpenseAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    total?: boolean
    categoriaMaiorGasto?: boolean
    diferencamensal?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseAnalysis"]>

  export type ExpenseAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    total?: boolean
    categoriaMaiorGasto?: boolean
    diferencamensal?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expenseAnalysis"]>

  export type ExpenseAnalysisSelectScalar = {
    id?: boolean
    userId?: boolean
    total?: boolean
    categoriaMaiorGasto?: boolean
    diferencamensal?: boolean
    createdAt?: boolean
  }

  export type ExpenseAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "total" | "categoriaMaiorGasto" | "diferencamensal" | "createdAt", ExtArgs["result"]["expenseAnalysis"]>
  export type ExpenseAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExpenseAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExpenseAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExpenseAnalysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      total: number
      categoriaMaiorGasto: number
      diferencamensal: number
      createdAt: Date
    }, ExtArgs["result"]["expenseAnalysis"]>
    composites: {}
  }

  type ExpenseAnalysisGetPayload<S extends boolean | null | undefined | ExpenseAnalysisDefaultArgs> = $Result.GetResult<Prisma.$ExpenseAnalysisPayload, S>

  type ExpenseAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseAnalysisCountAggregateInputType | true
    }

  export interface ExpenseAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExpenseAnalysis'], meta: { name: 'ExpenseAnalysis' } }
    /**
     * Find zero or one ExpenseAnalysis that matches the filter.
     * @param {ExpenseAnalysisFindUniqueArgs} args - Arguments to find a ExpenseAnalysis
     * @example
     * // Get one ExpenseAnalysis
     * const expenseAnalysis = await prisma.expenseAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseAnalysisFindUniqueArgs>(args: SelectSubset<T, ExpenseAnalysisFindUniqueArgs<ExtArgs>>): Prisma__ExpenseAnalysisClient<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExpenseAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseAnalysisFindUniqueOrThrowArgs} args - Arguments to find a ExpenseAnalysis
     * @example
     * // Get one ExpenseAnalysis
     * const expenseAnalysis = await prisma.expenseAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseAnalysisClient<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAnalysisFindFirstArgs} args - Arguments to find a ExpenseAnalysis
     * @example
     * // Get one ExpenseAnalysis
     * const expenseAnalysis = await prisma.expenseAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseAnalysisFindFirstArgs>(args?: SelectSubset<T, ExpenseAnalysisFindFirstArgs<ExtArgs>>): Prisma__ExpenseAnalysisClient<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExpenseAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAnalysisFindFirstOrThrowArgs} args - Arguments to find a ExpenseAnalysis
     * @example
     * // Get one ExpenseAnalysis
     * const expenseAnalysis = await prisma.expenseAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseAnalysisClient<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExpenseAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExpenseAnalyses
     * const expenseAnalyses = await prisma.expenseAnalysis.findMany()
     * 
     * // Get first 10 ExpenseAnalyses
     * const expenseAnalyses = await prisma.expenseAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseAnalysisWithIdOnly = await prisma.expenseAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseAnalysisFindManyArgs>(args?: SelectSubset<T, ExpenseAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExpenseAnalysis.
     * @param {ExpenseAnalysisCreateArgs} args - Arguments to create a ExpenseAnalysis.
     * @example
     * // Create one ExpenseAnalysis
     * const ExpenseAnalysis = await prisma.expenseAnalysis.create({
     *   data: {
     *     // ... data to create a ExpenseAnalysis
     *   }
     * })
     * 
     */
    create<T extends ExpenseAnalysisCreateArgs>(args: SelectSubset<T, ExpenseAnalysisCreateArgs<ExtArgs>>): Prisma__ExpenseAnalysisClient<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExpenseAnalyses.
     * @param {ExpenseAnalysisCreateManyArgs} args - Arguments to create many ExpenseAnalyses.
     * @example
     * // Create many ExpenseAnalyses
     * const expenseAnalysis = await prisma.expenseAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseAnalysisCreateManyArgs>(args?: SelectSubset<T, ExpenseAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExpenseAnalyses and returns the data saved in the database.
     * @param {ExpenseAnalysisCreateManyAndReturnArgs} args - Arguments to create many ExpenseAnalyses.
     * @example
     * // Create many ExpenseAnalyses
     * const expenseAnalysis = await prisma.expenseAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExpenseAnalyses and only return the `id`
     * const expenseAnalysisWithIdOnly = await prisma.expenseAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExpenseAnalysis.
     * @param {ExpenseAnalysisDeleteArgs} args - Arguments to delete one ExpenseAnalysis.
     * @example
     * // Delete one ExpenseAnalysis
     * const ExpenseAnalysis = await prisma.expenseAnalysis.delete({
     *   where: {
     *     // ... filter to delete one ExpenseAnalysis
     *   }
     * })
     * 
     */
    delete<T extends ExpenseAnalysisDeleteArgs>(args: SelectSubset<T, ExpenseAnalysisDeleteArgs<ExtArgs>>): Prisma__ExpenseAnalysisClient<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExpenseAnalysis.
     * @param {ExpenseAnalysisUpdateArgs} args - Arguments to update one ExpenseAnalysis.
     * @example
     * // Update one ExpenseAnalysis
     * const expenseAnalysis = await prisma.expenseAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseAnalysisUpdateArgs>(args: SelectSubset<T, ExpenseAnalysisUpdateArgs<ExtArgs>>): Prisma__ExpenseAnalysisClient<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExpenseAnalyses.
     * @param {ExpenseAnalysisDeleteManyArgs} args - Arguments to filter ExpenseAnalyses to delete.
     * @example
     * // Delete a few ExpenseAnalyses
     * const { count } = await prisma.expenseAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseAnalysisDeleteManyArgs>(args?: SelectSubset<T, ExpenseAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExpenseAnalyses
     * const expenseAnalysis = await prisma.expenseAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseAnalysisUpdateManyArgs>(args: SelectSubset<T, ExpenseAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExpenseAnalyses and returns the data updated in the database.
     * @param {ExpenseAnalysisUpdateManyAndReturnArgs} args - Arguments to update many ExpenseAnalyses.
     * @example
     * // Update many ExpenseAnalyses
     * const expenseAnalysis = await prisma.expenseAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExpenseAnalyses and only return the `id`
     * const expenseAnalysisWithIdOnly = await prisma.expenseAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExpenseAnalysis.
     * @param {ExpenseAnalysisUpsertArgs} args - Arguments to update or create a ExpenseAnalysis.
     * @example
     * // Update or create a ExpenseAnalysis
     * const expenseAnalysis = await prisma.expenseAnalysis.upsert({
     *   create: {
     *     // ... data to create a ExpenseAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExpenseAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseAnalysisUpsertArgs>(args: SelectSubset<T, ExpenseAnalysisUpsertArgs<ExtArgs>>): Prisma__ExpenseAnalysisClient<$Result.GetResult<Prisma.$ExpenseAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExpenseAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAnalysisCountArgs} args - Arguments to filter ExpenseAnalyses to count.
     * @example
     * // Count the number of ExpenseAnalyses
     * const count = await prisma.expenseAnalysis.count({
     *   where: {
     *     // ... the filter for the ExpenseAnalyses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseAnalysisCountArgs>(
      args?: Subset<T, ExpenseAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExpenseAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAnalysisAggregateArgs>(args: Subset<T, ExpenseAnalysisAggregateArgs>): Prisma.PrismaPromise<GetExpenseAnalysisAggregateType<T>>

    /**
     * Group by ExpenseAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExpenseAnalysis model
   */
  readonly fields: ExpenseAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExpenseAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExpenseAnalysis model
   */
  interface ExpenseAnalysisFieldRefs {
    readonly id: FieldRef<"ExpenseAnalysis", 'String'>
    readonly userId: FieldRef<"ExpenseAnalysis", 'String'>
    readonly total: FieldRef<"ExpenseAnalysis", 'Float'>
    readonly categoriaMaiorGasto: FieldRef<"ExpenseAnalysis", 'Float'>
    readonly diferencamensal: FieldRef<"ExpenseAnalysis", 'Float'>
    readonly createdAt: FieldRef<"ExpenseAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExpenseAnalysis findUnique
   */
  export type ExpenseAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseAnalysis to fetch.
     */
    where: ExpenseAnalysisWhereUniqueInput
  }

  /**
   * ExpenseAnalysis findUniqueOrThrow
   */
  export type ExpenseAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseAnalysis to fetch.
     */
    where: ExpenseAnalysisWhereUniqueInput
  }

  /**
   * ExpenseAnalysis findFirst
   */
  export type ExpenseAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseAnalysis to fetch.
     */
    where?: ExpenseAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseAnalyses to fetch.
     */
    orderBy?: ExpenseAnalysisOrderByWithRelationInput | ExpenseAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseAnalyses.
     */
    cursor?: ExpenseAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseAnalyses.
     */
    distinct?: ExpenseAnalysisScalarFieldEnum | ExpenseAnalysisScalarFieldEnum[]
  }

  /**
   * ExpenseAnalysis findFirstOrThrow
   */
  export type ExpenseAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseAnalysis to fetch.
     */
    where?: ExpenseAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseAnalyses to fetch.
     */
    orderBy?: ExpenseAnalysisOrderByWithRelationInput | ExpenseAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExpenseAnalyses.
     */
    cursor?: ExpenseAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExpenseAnalyses.
     */
    distinct?: ExpenseAnalysisScalarFieldEnum | ExpenseAnalysisScalarFieldEnum[]
  }

  /**
   * ExpenseAnalysis findMany
   */
  export type ExpenseAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ExpenseAnalyses to fetch.
     */
    where?: ExpenseAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExpenseAnalyses to fetch.
     */
    orderBy?: ExpenseAnalysisOrderByWithRelationInput | ExpenseAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExpenseAnalyses.
     */
    cursor?: ExpenseAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExpenseAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExpenseAnalyses.
     */
    skip?: number
    distinct?: ExpenseAnalysisScalarFieldEnum | ExpenseAnalysisScalarFieldEnum[]
  }

  /**
   * ExpenseAnalysis create
   */
  export type ExpenseAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a ExpenseAnalysis.
     */
    data: XOR<ExpenseAnalysisCreateInput, ExpenseAnalysisUncheckedCreateInput>
  }

  /**
   * ExpenseAnalysis createMany
   */
  export type ExpenseAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExpenseAnalyses.
     */
    data: ExpenseAnalysisCreateManyInput | ExpenseAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExpenseAnalysis createManyAndReturn
   */
  export type ExpenseAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many ExpenseAnalyses.
     */
    data: ExpenseAnalysisCreateManyInput | ExpenseAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseAnalysis update
   */
  export type ExpenseAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a ExpenseAnalysis.
     */
    data: XOR<ExpenseAnalysisUpdateInput, ExpenseAnalysisUncheckedUpdateInput>
    /**
     * Choose, which ExpenseAnalysis to update.
     */
    where: ExpenseAnalysisWhereUniqueInput
  }

  /**
   * ExpenseAnalysis updateMany
   */
  export type ExpenseAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExpenseAnalyses.
     */
    data: XOR<ExpenseAnalysisUpdateManyMutationInput, ExpenseAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseAnalyses to update
     */
    where?: ExpenseAnalysisWhereInput
    /**
     * Limit how many ExpenseAnalyses to update.
     */
    limit?: number
  }

  /**
   * ExpenseAnalysis updateManyAndReturn
   */
  export type ExpenseAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update ExpenseAnalyses.
     */
    data: XOR<ExpenseAnalysisUpdateManyMutationInput, ExpenseAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which ExpenseAnalyses to update
     */
    where?: ExpenseAnalysisWhereInput
    /**
     * Limit how many ExpenseAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExpenseAnalysis upsert
   */
  export type ExpenseAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the ExpenseAnalysis to update in case it exists.
     */
    where: ExpenseAnalysisWhereUniqueInput
    /**
     * In case the ExpenseAnalysis found by the `where` argument doesn't exist, create a new ExpenseAnalysis with this data.
     */
    create: XOR<ExpenseAnalysisCreateInput, ExpenseAnalysisUncheckedCreateInput>
    /**
     * In case the ExpenseAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseAnalysisUpdateInput, ExpenseAnalysisUncheckedUpdateInput>
  }

  /**
   * ExpenseAnalysis delete
   */
  export type ExpenseAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
    /**
     * Filter which ExpenseAnalysis to delete.
     */
    where: ExpenseAnalysisWhereUniqueInput
  }

  /**
   * ExpenseAnalysis deleteMany
   */
  export type ExpenseAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExpenseAnalyses to delete
     */
    where?: ExpenseAnalysisWhereInput
    /**
     * Limit how many ExpenseAnalyses to delete.
     */
    limit?: number
  }

  /**
   * ExpenseAnalysis without action
   */
  export type ExpenseAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExpenseAnalysis
     */
    select?: ExpenseAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExpenseAnalysis
     */
    omit?: ExpenseAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model Forms
   */

  export type AggregateForms = {
    _count: FormsCountAggregateOutputType | null
    _min: FormsMinAggregateOutputType | null
    _max: FormsMaxAggregateOutputType | null
  }

  export type FormsMinAggregateOutputType = {
    id: string | null
    media_salarial: string | null
    idade: string | null
    quantidade_filhos: string | null
    dinheiro: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type FormsMaxAggregateOutputType = {
    id: string | null
    media_salarial: string | null
    idade: string | null
    quantidade_filhos: string | null
    dinheiro: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type FormsCountAggregateOutputType = {
    id: number
    media_salarial: number
    idade: number
    quantidade_filhos: number
    dinheiro: number
    createdAt: number
    userId: number
    _all: number
  }


  export type FormsMinAggregateInputType = {
    id?: true
    media_salarial?: true
    idade?: true
    quantidade_filhos?: true
    dinheiro?: true
    createdAt?: true
    userId?: true
  }

  export type FormsMaxAggregateInputType = {
    id?: true
    media_salarial?: true
    idade?: true
    quantidade_filhos?: true
    dinheiro?: true
    createdAt?: true
    userId?: true
  }

  export type FormsCountAggregateInputType = {
    id?: true
    media_salarial?: true
    idade?: true
    quantidade_filhos?: true
    dinheiro?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type FormsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to aggregate.
     */
    where?: FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormsOrderByWithRelationInput | FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Forms
    **/
    _count?: true | FormsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormsMaxAggregateInputType
  }

  export type GetFormsAggregateType<T extends FormsAggregateArgs> = {
        [P in keyof T & keyof AggregateForms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateForms[P]>
      : GetScalarType<T[P], AggregateForms[P]>
  }




  export type FormsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormsWhereInput
    orderBy?: FormsOrderByWithAggregationInput | FormsOrderByWithAggregationInput[]
    by: FormsScalarFieldEnum[] | FormsScalarFieldEnum
    having?: FormsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormsCountAggregateInputType | true
    _min?: FormsMinAggregateInputType
    _max?: FormsMaxAggregateInputType
  }

  export type FormsGroupByOutputType = {
    id: string
    media_salarial: string
    idade: string
    quantidade_filhos: string
    dinheiro: string
    createdAt: Date
    userId: string
    _count: FormsCountAggregateOutputType | null
    _min: FormsMinAggregateOutputType | null
    _max: FormsMaxAggregateOutputType | null
  }

  type GetFormsGroupByPayload<T extends FormsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormsGroupByOutputType[P]>
            : GetScalarType<T[P], FormsGroupByOutputType[P]>
        }
      >
    >


  export type FormsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    media_salarial?: boolean
    idade?: boolean
    quantidade_filhos?: boolean
    dinheiro?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forms"]>

  export type FormsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    media_salarial?: boolean
    idade?: boolean
    quantidade_filhos?: boolean
    dinheiro?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forms"]>

  export type FormsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    media_salarial?: boolean
    idade?: boolean
    quantidade_filhos?: boolean
    dinheiro?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["forms"]>

  export type FormsSelectScalar = {
    id?: boolean
    media_salarial?: boolean
    idade?: boolean
    quantidade_filhos?: boolean
    dinheiro?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type FormsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "media_salarial" | "idade" | "quantidade_filhos" | "dinheiro" | "createdAt" | "userId", ExtArgs["result"]["forms"]>
  export type FormsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FormsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FormsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FormsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Forms"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      media_salarial: string
      idade: string
      quantidade_filhos: string
      dinheiro: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["forms"]>
    composites: {}
  }

  type FormsGetPayload<S extends boolean | null | undefined | FormsDefaultArgs> = $Result.GetResult<Prisma.$FormsPayload, S>

  type FormsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormsCountAggregateInputType | true
    }

  export interface FormsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Forms'], meta: { name: 'Forms' } }
    /**
     * Find zero or one Forms that matches the filter.
     * @param {FormsFindUniqueArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormsFindUniqueArgs>(args: SelectSubset<T, FormsFindUniqueArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Forms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormsFindUniqueOrThrowArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormsFindUniqueOrThrowArgs>(args: SelectSubset<T, FormsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsFindFirstArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormsFindFirstArgs>(args?: SelectSubset<T, FormsFindFirstArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Forms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsFindFirstOrThrowArgs} args - Arguments to find a Forms
     * @example
     * // Get one Forms
     * const forms = await prisma.forms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormsFindFirstOrThrowArgs>(args?: SelectSubset<T, FormsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Forms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Forms
     * const forms = await prisma.forms.findMany()
     * 
     * // Get first 10 Forms
     * const forms = await prisma.forms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formsWithIdOnly = await prisma.forms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormsFindManyArgs>(args?: SelectSubset<T, FormsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Forms.
     * @param {FormsCreateArgs} args - Arguments to create a Forms.
     * @example
     * // Create one Forms
     * const Forms = await prisma.forms.create({
     *   data: {
     *     // ... data to create a Forms
     *   }
     * })
     * 
     */
    create<T extends FormsCreateArgs>(args: SelectSubset<T, FormsCreateArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Forms.
     * @param {FormsCreateManyArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const forms = await prisma.forms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormsCreateManyArgs>(args?: SelectSubset<T, FormsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Forms and returns the data saved in the database.
     * @param {FormsCreateManyAndReturnArgs} args - Arguments to create many Forms.
     * @example
     * // Create many Forms
     * const forms = await prisma.forms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Forms and only return the `id`
     * const formsWithIdOnly = await prisma.forms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormsCreateManyAndReturnArgs>(args?: SelectSubset<T, FormsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Forms.
     * @param {FormsDeleteArgs} args - Arguments to delete one Forms.
     * @example
     * // Delete one Forms
     * const Forms = await prisma.forms.delete({
     *   where: {
     *     // ... filter to delete one Forms
     *   }
     * })
     * 
     */
    delete<T extends FormsDeleteArgs>(args: SelectSubset<T, FormsDeleteArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Forms.
     * @param {FormsUpdateArgs} args - Arguments to update one Forms.
     * @example
     * // Update one Forms
     * const forms = await prisma.forms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormsUpdateArgs>(args: SelectSubset<T, FormsUpdateArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Forms.
     * @param {FormsDeleteManyArgs} args - Arguments to filter Forms to delete.
     * @example
     * // Delete a few Forms
     * const { count } = await prisma.forms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormsDeleteManyArgs>(args?: SelectSubset<T, FormsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Forms
     * const forms = await prisma.forms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormsUpdateManyArgs>(args: SelectSubset<T, FormsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Forms and returns the data updated in the database.
     * @param {FormsUpdateManyAndReturnArgs} args - Arguments to update many Forms.
     * @example
     * // Update many Forms
     * const forms = await prisma.forms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Forms and only return the `id`
     * const formsWithIdOnly = await prisma.forms.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormsUpdateManyAndReturnArgs>(args: SelectSubset<T, FormsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Forms.
     * @param {FormsUpsertArgs} args - Arguments to update or create a Forms.
     * @example
     * // Update or create a Forms
     * const forms = await prisma.forms.upsert({
     *   create: {
     *     // ... data to create a Forms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Forms we want to update
     *   }
     * })
     */
    upsert<T extends FormsUpsertArgs>(args: SelectSubset<T, FormsUpsertArgs<ExtArgs>>): Prisma__FormsClient<$Result.GetResult<Prisma.$FormsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsCountArgs} args - Arguments to filter Forms to count.
     * @example
     * // Count the number of Forms
     * const count = await prisma.forms.count({
     *   where: {
     *     // ... the filter for the Forms we want to count
     *   }
     * })
    **/
    count<T extends FormsCountArgs>(
      args?: Subset<T, FormsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormsAggregateArgs>(args: Subset<T, FormsAggregateArgs>): Prisma.PrismaPromise<GetFormsAggregateType<T>>

    /**
     * Group by Forms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormsGroupByArgs['orderBy'] }
        : { orderBy?: FormsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Forms model
   */
  readonly fields: FormsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Forms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Forms model
   */
  interface FormsFieldRefs {
    readonly id: FieldRef<"Forms", 'String'>
    readonly media_salarial: FieldRef<"Forms", 'String'>
    readonly idade: FieldRef<"Forms", 'String'>
    readonly quantidade_filhos: FieldRef<"Forms", 'String'>
    readonly dinheiro: FieldRef<"Forms", 'String'>
    readonly createdAt: FieldRef<"Forms", 'DateTime'>
    readonly userId: FieldRef<"Forms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Forms findUnique
   */
  export type FormsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where: FormsWhereUniqueInput
  }

  /**
   * Forms findUniqueOrThrow
   */
  export type FormsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where: FormsWhereUniqueInput
  }

  /**
   * Forms findFirst
   */
  export type FormsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormsOrderByWithRelationInput | FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * Forms findFirstOrThrow
   */
  export type FormsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormsOrderByWithRelationInput | FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Forms.
     */
    cursor?: FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Forms.
     */
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * Forms findMany
   */
  export type FormsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter, which Forms to fetch.
     */
    where?: FormsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Forms to fetch.
     */
    orderBy?: FormsOrderByWithRelationInput | FormsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Forms.
     */
    cursor?: FormsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Forms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Forms.
     */
    skip?: number
    distinct?: FormsScalarFieldEnum | FormsScalarFieldEnum[]
  }

  /**
   * Forms create
   */
  export type FormsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * The data needed to create a Forms.
     */
    data: XOR<FormsCreateInput, FormsUncheckedCreateInput>
  }

  /**
   * Forms createMany
   */
  export type FormsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Forms.
     */
    data: FormsCreateManyInput | FormsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Forms createManyAndReturn
   */
  export type FormsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * The data used to create many Forms.
     */
    data: FormsCreateManyInput | FormsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forms update
   */
  export type FormsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * The data needed to update a Forms.
     */
    data: XOR<FormsUpdateInput, FormsUncheckedUpdateInput>
    /**
     * Choose, which Forms to update.
     */
    where: FormsWhereUniqueInput
  }

  /**
   * Forms updateMany
   */
  export type FormsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Forms.
     */
    data: XOR<FormsUpdateManyMutationInput, FormsUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormsWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
  }

  /**
   * Forms updateManyAndReturn
   */
  export type FormsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * The data used to update Forms.
     */
    data: XOR<FormsUpdateManyMutationInput, FormsUncheckedUpdateManyInput>
    /**
     * Filter which Forms to update
     */
    where?: FormsWhereInput
    /**
     * Limit how many Forms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Forms upsert
   */
  export type FormsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * The filter to search for the Forms to update in case it exists.
     */
    where: FormsWhereUniqueInput
    /**
     * In case the Forms found by the `where` argument doesn't exist, create a new Forms with this data.
     */
    create: XOR<FormsCreateInput, FormsUncheckedCreateInput>
    /**
     * In case the Forms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormsUpdateInput, FormsUncheckedUpdateInput>
  }

  /**
   * Forms delete
   */
  export type FormsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
    /**
     * Filter which Forms to delete.
     */
    where: FormsWhereUniqueInput
  }

  /**
   * Forms deleteMany
   */
  export type FormsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Forms to delete
     */
    where?: FormsWhereInput
    /**
     * Limit how many Forms to delete.
     */
    limit?: number
  }

  /**
   * Forms without action
   */
  export type FormsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Forms
     */
    select?: FormsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Forms
     */
    omit?: FormsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormsInclude<ExtArgs> | null
  }


  /**
   * Model FinancialAnalysis
   */

  export type AggregateFinancialAnalysis = {
    _count: FinancialAnalysisCountAggregateOutputType | null
    _avg: FinancialAnalysisAvgAggregateOutputType | null
    _sum: FinancialAnalysisSumAggregateOutputType | null
    _min: FinancialAnalysisMinAggregateOutputType | null
    _max: FinancialAnalysisMaxAggregateOutputType | null
  }

  export type FinancialAnalysisAvgAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type FinancialAnalysisSumAggregateOutputType = {
    month: number | null
    year: number | null
  }

  export type FinancialAnalysisMinAggregateOutputType = {
    id: string | null
    userId: string | null
    month: number | null
    year: number | null
    createdAt: Date | null
  }

  export type FinancialAnalysisMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    month: number | null
    year: number | null
    createdAt: Date | null
  }

  export type FinancialAnalysisCountAggregateOutputType = {
    id: number
    userId: number
    month: number
    year: number
    data: number
    createdAt: number
    _all: number
  }


  export type FinancialAnalysisAvgAggregateInputType = {
    month?: true
    year?: true
  }

  export type FinancialAnalysisSumAggregateInputType = {
    month?: true
    year?: true
  }

  export type FinancialAnalysisMinAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    createdAt?: true
  }

  export type FinancialAnalysisMaxAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    createdAt?: true
  }

  export type FinancialAnalysisCountAggregateInputType = {
    id?: true
    userId?: true
    month?: true
    year?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type FinancialAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialAnalysis to aggregate.
     */
    where?: FinancialAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialAnalyses to fetch.
     */
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinancialAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinancialAnalyses
    **/
    _count?: true | FinancialAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinancialAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinancialAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinancialAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinancialAnalysisMaxAggregateInputType
  }

  export type GetFinancialAnalysisAggregateType<T extends FinancialAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateFinancialAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinancialAnalysis[P]>
      : GetScalarType<T[P], AggregateFinancialAnalysis[P]>
  }




  export type FinancialAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinancialAnalysisWhereInput
    orderBy?: FinancialAnalysisOrderByWithAggregationInput | FinancialAnalysisOrderByWithAggregationInput[]
    by: FinancialAnalysisScalarFieldEnum[] | FinancialAnalysisScalarFieldEnum
    having?: FinancialAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinancialAnalysisCountAggregateInputType | true
    _avg?: FinancialAnalysisAvgAggregateInputType
    _sum?: FinancialAnalysisSumAggregateInputType
    _min?: FinancialAnalysisMinAggregateInputType
    _max?: FinancialAnalysisMaxAggregateInputType
  }

  export type FinancialAnalysisGroupByOutputType = {
    id: string
    userId: string
    month: number
    year: number
    data: JsonValue
    createdAt: Date
    _count: FinancialAnalysisCountAggregateOutputType | null
    _avg: FinancialAnalysisAvgAggregateOutputType | null
    _sum: FinancialAnalysisSumAggregateOutputType | null
    _min: FinancialAnalysisMinAggregateOutputType | null
    _max: FinancialAnalysisMaxAggregateOutputType | null
  }

  type GetFinancialAnalysisGroupByPayload<T extends FinancialAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinancialAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinancialAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinancialAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], FinancialAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type FinancialAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    month?: boolean
    year?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialAnalysis"]>

  export type FinancialAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    month?: boolean
    year?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialAnalysis"]>

  export type FinancialAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    month?: boolean
    year?: boolean
    data?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["financialAnalysis"]>

  export type FinancialAnalysisSelectScalar = {
    id?: boolean
    userId?: boolean
    month?: boolean
    year?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type FinancialAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "month" | "year" | "data" | "createdAt", ExtArgs["result"]["financialAnalysis"]>
  export type FinancialAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinancialAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinancialAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FinancialAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinancialAnalysis"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      month: number
      year: number
      data: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["financialAnalysis"]>
    composites: {}
  }

  type FinancialAnalysisGetPayload<S extends boolean | null | undefined | FinancialAnalysisDefaultArgs> = $Result.GetResult<Prisma.$FinancialAnalysisPayload, S>

  type FinancialAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinancialAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinancialAnalysisCountAggregateInputType | true
    }

  export interface FinancialAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinancialAnalysis'], meta: { name: 'FinancialAnalysis' } }
    /**
     * Find zero or one FinancialAnalysis that matches the filter.
     * @param {FinancialAnalysisFindUniqueArgs} args - Arguments to find a FinancialAnalysis
     * @example
     * // Get one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinancialAnalysisFindUniqueArgs>(args: SelectSubset<T, FinancialAnalysisFindUniqueArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinancialAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinancialAnalysisFindUniqueOrThrowArgs} args - Arguments to find a FinancialAnalysis
     * @example
     * // Get one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinancialAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, FinancialAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisFindFirstArgs} args - Arguments to find a FinancialAnalysis
     * @example
     * // Get one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinancialAnalysisFindFirstArgs>(args?: SelectSubset<T, FinancialAnalysisFindFirstArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinancialAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisFindFirstOrThrowArgs} args - Arguments to find a FinancialAnalysis
     * @example
     * // Get one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinancialAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, FinancialAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinancialAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinancialAnalyses
     * const financialAnalyses = await prisma.financialAnalysis.findMany()
     * 
     * // Get first 10 FinancialAnalyses
     * const financialAnalyses = await prisma.financialAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const financialAnalysisWithIdOnly = await prisma.financialAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinancialAnalysisFindManyArgs>(args?: SelectSubset<T, FinancialAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinancialAnalysis.
     * @param {FinancialAnalysisCreateArgs} args - Arguments to create a FinancialAnalysis.
     * @example
     * // Create one FinancialAnalysis
     * const FinancialAnalysis = await prisma.financialAnalysis.create({
     *   data: {
     *     // ... data to create a FinancialAnalysis
     *   }
     * })
     * 
     */
    create<T extends FinancialAnalysisCreateArgs>(args: SelectSubset<T, FinancialAnalysisCreateArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinancialAnalyses.
     * @param {FinancialAnalysisCreateManyArgs} args - Arguments to create many FinancialAnalyses.
     * @example
     * // Create many FinancialAnalyses
     * const financialAnalysis = await prisma.financialAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinancialAnalysisCreateManyArgs>(args?: SelectSubset<T, FinancialAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinancialAnalyses and returns the data saved in the database.
     * @param {FinancialAnalysisCreateManyAndReturnArgs} args - Arguments to create many FinancialAnalyses.
     * @example
     * // Create many FinancialAnalyses
     * const financialAnalysis = await prisma.financialAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinancialAnalyses and only return the `id`
     * const financialAnalysisWithIdOnly = await prisma.financialAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinancialAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, FinancialAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinancialAnalysis.
     * @param {FinancialAnalysisDeleteArgs} args - Arguments to delete one FinancialAnalysis.
     * @example
     * // Delete one FinancialAnalysis
     * const FinancialAnalysis = await prisma.financialAnalysis.delete({
     *   where: {
     *     // ... filter to delete one FinancialAnalysis
     *   }
     * })
     * 
     */
    delete<T extends FinancialAnalysisDeleteArgs>(args: SelectSubset<T, FinancialAnalysisDeleteArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinancialAnalysis.
     * @param {FinancialAnalysisUpdateArgs} args - Arguments to update one FinancialAnalysis.
     * @example
     * // Update one FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinancialAnalysisUpdateArgs>(args: SelectSubset<T, FinancialAnalysisUpdateArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinancialAnalyses.
     * @param {FinancialAnalysisDeleteManyArgs} args - Arguments to filter FinancialAnalyses to delete.
     * @example
     * // Delete a few FinancialAnalyses
     * const { count } = await prisma.financialAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinancialAnalysisDeleteManyArgs>(args?: SelectSubset<T, FinancialAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinancialAnalyses
     * const financialAnalysis = await prisma.financialAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinancialAnalysisUpdateManyArgs>(args: SelectSubset<T, FinancialAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinancialAnalyses and returns the data updated in the database.
     * @param {FinancialAnalysisUpdateManyAndReturnArgs} args - Arguments to update many FinancialAnalyses.
     * @example
     * // Update many FinancialAnalyses
     * const financialAnalysis = await prisma.financialAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinancialAnalyses and only return the `id`
     * const financialAnalysisWithIdOnly = await prisma.financialAnalysis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinancialAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, FinancialAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinancialAnalysis.
     * @param {FinancialAnalysisUpsertArgs} args - Arguments to update or create a FinancialAnalysis.
     * @example
     * // Update or create a FinancialAnalysis
     * const financialAnalysis = await prisma.financialAnalysis.upsert({
     *   create: {
     *     // ... data to create a FinancialAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinancialAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends FinancialAnalysisUpsertArgs>(args: SelectSubset<T, FinancialAnalysisUpsertArgs<ExtArgs>>): Prisma__FinancialAnalysisClient<$Result.GetResult<Prisma.$FinancialAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinancialAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisCountArgs} args - Arguments to filter FinancialAnalyses to count.
     * @example
     * // Count the number of FinancialAnalyses
     * const count = await prisma.financialAnalysis.count({
     *   where: {
     *     // ... the filter for the FinancialAnalyses we want to count
     *   }
     * })
    **/
    count<T extends FinancialAnalysisCountArgs>(
      args?: Subset<T, FinancialAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinancialAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinancialAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinancialAnalysisAggregateArgs>(args: Subset<T, FinancialAnalysisAggregateArgs>): Prisma.PrismaPromise<GetFinancialAnalysisAggregateType<T>>

    /**
     * Group by FinancialAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinancialAnalysisGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinancialAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinancialAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: FinancialAnalysisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinancialAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinancialAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinancialAnalysis model
   */
  readonly fields: FinancialAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinancialAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinancialAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinancialAnalysis model
   */
  interface FinancialAnalysisFieldRefs {
    readonly id: FieldRef<"FinancialAnalysis", 'String'>
    readonly userId: FieldRef<"FinancialAnalysis", 'String'>
    readonly month: FieldRef<"FinancialAnalysis", 'Int'>
    readonly year: FieldRef<"FinancialAnalysis", 'Int'>
    readonly data: FieldRef<"FinancialAnalysis", 'Json'>
    readonly createdAt: FieldRef<"FinancialAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FinancialAnalysis findUnique
   */
  export type FinancialAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalysis to fetch.
     */
    where: FinancialAnalysisWhereUniqueInput
  }

  /**
   * FinancialAnalysis findUniqueOrThrow
   */
  export type FinancialAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalysis to fetch.
     */
    where: FinancialAnalysisWhereUniqueInput
  }

  /**
   * FinancialAnalysis findFirst
   */
  export type FinancialAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalysis to fetch.
     */
    where?: FinancialAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialAnalyses to fetch.
     */
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialAnalyses.
     */
    cursor?: FinancialAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialAnalyses.
     */
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * FinancialAnalysis findFirstOrThrow
   */
  export type FinancialAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalysis to fetch.
     */
    where?: FinancialAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialAnalyses to fetch.
     */
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinancialAnalyses.
     */
    cursor?: FinancialAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinancialAnalyses.
     */
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * FinancialAnalysis findMany
   */
  export type FinancialAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which FinancialAnalyses to fetch.
     */
    where?: FinancialAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinancialAnalyses to fetch.
     */
    orderBy?: FinancialAnalysisOrderByWithRelationInput | FinancialAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinancialAnalyses.
     */
    cursor?: FinancialAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinancialAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinancialAnalyses.
     */
    skip?: number
    distinct?: FinancialAnalysisScalarFieldEnum | FinancialAnalysisScalarFieldEnum[]
  }

  /**
   * FinancialAnalysis create
   */
  export type FinancialAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a FinancialAnalysis.
     */
    data: XOR<FinancialAnalysisCreateInput, FinancialAnalysisUncheckedCreateInput>
  }

  /**
   * FinancialAnalysis createMany
   */
  export type FinancialAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinancialAnalyses.
     */
    data: FinancialAnalysisCreateManyInput | FinancialAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FinancialAnalysis createManyAndReturn
   */
  export type FinancialAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many FinancialAnalyses.
     */
    data: FinancialAnalysisCreateManyInput | FinancialAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialAnalysis update
   */
  export type FinancialAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a FinancialAnalysis.
     */
    data: XOR<FinancialAnalysisUpdateInput, FinancialAnalysisUncheckedUpdateInput>
    /**
     * Choose, which FinancialAnalysis to update.
     */
    where: FinancialAnalysisWhereUniqueInput
  }

  /**
   * FinancialAnalysis updateMany
   */
  export type FinancialAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinancialAnalyses.
     */
    data: XOR<FinancialAnalysisUpdateManyMutationInput, FinancialAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which FinancialAnalyses to update
     */
    where?: FinancialAnalysisWhereInput
    /**
     * Limit how many FinancialAnalyses to update.
     */
    limit?: number
  }

  /**
   * FinancialAnalysis updateManyAndReturn
   */
  export type FinancialAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update FinancialAnalyses.
     */
    data: XOR<FinancialAnalysisUpdateManyMutationInput, FinancialAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which FinancialAnalyses to update
     */
    where?: FinancialAnalysisWhereInput
    /**
     * Limit how many FinancialAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinancialAnalysis upsert
   */
  export type FinancialAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the FinancialAnalysis to update in case it exists.
     */
    where: FinancialAnalysisWhereUniqueInput
    /**
     * In case the FinancialAnalysis found by the `where` argument doesn't exist, create a new FinancialAnalysis with this data.
     */
    create: XOR<FinancialAnalysisCreateInput, FinancialAnalysisUncheckedCreateInput>
    /**
     * In case the FinancialAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinancialAnalysisUpdateInput, FinancialAnalysisUncheckedUpdateInput>
  }

  /**
   * FinancialAnalysis delete
   */
  export type FinancialAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
    /**
     * Filter which FinancialAnalysis to delete.
     */
    where: FinancialAnalysisWhereUniqueInput
  }

  /**
   * FinancialAnalysis deleteMany
   */
  export type FinancialAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinancialAnalyses to delete
     */
    where?: FinancialAnalysisWhereInput
    /**
     * Limit how many FinancialAnalyses to delete.
     */
    limit?: number
  }

  /**
   * FinancialAnalysis without action
   */
  export type FinancialAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinancialAnalysis
     */
    select?: FinancialAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinancialAnalysis
     */
    omit?: FinancialAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinancialAnalysisInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatarUrl: 'avatarUrl'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    amount: 'amount',
    date: 'date',
    isCredit: 'isCredit',
    totalInstallments: 'totalInstallments',
    currentInstallment: 'currentInstallment',
    categoryId: 'categoryId',
    userId: 'userId'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    title: 'title',
    target: 'target',
    progress: 'progress',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    category: 'category',
    imageUrl: 'imageUrl'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    value: 'value',
    date: 'date',
    userId: 'userId'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const IncomeScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId',
    income: 'income',
    extraincome: 'extraincome',
    otherincome: 'otherincome',
    month: 'month'
  };

  export type IncomeScalarFieldEnum = (typeof IncomeScalarFieldEnum)[keyof typeof IncomeScalarFieldEnum]


  export const IncomeSummaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    total: 'total',
    impostoRenda: 'impostoRenda',
    createdAt: 'createdAt',
    month: 'month'
  };

  export type IncomeSummaryScalarFieldEnum = (typeof IncomeSummaryScalarFieldEnum)[keyof typeof IncomeSummaryScalarFieldEnum]


  export const ExpenseAnalysisScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    total: 'total',
    categoriaMaiorGasto: 'categoriaMaiorGasto',
    diferencamensal: 'diferencamensal',
    createdAt: 'createdAt'
  };

  export type ExpenseAnalysisScalarFieldEnum = (typeof ExpenseAnalysisScalarFieldEnum)[keyof typeof ExpenseAnalysisScalarFieldEnum]


  export const FormsScalarFieldEnum: {
    id: 'id',
    media_salarial: 'media_salarial',
    idade: 'idade',
    quantidade_filhos: 'quantidade_filhos',
    dinheiro: 'dinheiro',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type FormsScalarFieldEnum = (typeof FormsScalarFieldEnum)[keyof typeof FormsScalarFieldEnum]


  export const FinancialAnalysisScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    month: 'month',
    year: 'year',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type FinancialAnalysisScalarFieldEnum = (typeof FinancialAnalysisScalarFieldEnum)[keyof typeof FinancialAnalysisScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'GoalStatus'
   */
  export type EnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus'>
    


  /**
   * Reference to a field of type 'GoalStatus[]'
   */
  export type ListEnumGoalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GoalStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    balance?: XOR<BalanceNullableScalarRelationFilter, BalanceWhereInput> | null
    expenses?: ExpenseListRelationFilter
    expensesAnalysis?: ExpenseAnalysisListRelationFilter
    financialAnalysis?: FinancialAnalysisListRelationFilter
    Forms?: FormsListRelationFilter
    goals?: GoalListRelationFilter
    incomes?: IncomeListRelationFilter
    incomesummary?: IncomeSummaryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    balance?: BalanceOrderByWithRelationInput
    expenses?: ExpenseOrderByRelationAggregateInput
    expensesAnalysis?: ExpenseAnalysisOrderByRelationAggregateInput
    financialAnalysis?: FinancialAnalysisOrderByRelationAggregateInput
    Forms?: FormsOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    incomes?: IncomeOrderByRelationAggregateInput
    incomesummary?: IncomeSummaryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    balance?: XOR<BalanceNullableScalarRelationFilter, BalanceWhereInput> | null
    expenses?: ExpenseListRelationFilter
    expensesAnalysis?: ExpenseAnalysisListRelationFilter
    financialAnalysis?: FinancialAnalysisListRelationFilter
    Forms?: FormsListRelationFilter
    goals?: GoalListRelationFilter
    incomes?: IncomeListRelationFilter
    incomesummary?: IncomeSummaryListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    title?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    isCredit?: BoolFilter<"Expense"> | boolean
    totalInstallments?: IntNullableFilter<"Expense"> | number | null
    currentInstallment?: IntNullableFilter<"Expense"> | number | null
    categoryId?: StringFilter<"Expense"> | string
    userId?: StringFilter<"Expense"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    isCredit?: SortOrder
    totalInstallments?: SortOrderInput | SortOrder
    currentInstallment?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    title?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    isCredit?: BoolFilter<"Expense"> | boolean
    totalInstallments?: IntNullableFilter<"Expense"> | number | null
    currentInstallment?: IntNullableFilter<"Expense"> | number | null
    categoryId?: StringFilter<"Expense"> | string
    userId?: StringFilter<"Expense"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    isCredit?: SortOrder
    totalInstallments?: SortOrderInput | SortOrder
    currentInstallment?: SortOrderInput | SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Expense"> | string
    title?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    isCredit?: BoolWithAggregatesFilter<"Expense"> | boolean
    totalInstallments?: IntNullableWithAggregatesFilter<"Expense"> | number | null
    currentInstallment?: IntNullableWithAggregatesFilter<"Expense"> | number | null
    categoryId?: StringWithAggregatesFilter<"Expense"> | string
    userId?: StringWithAggregatesFilter<"Expense"> | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    color?: StringNullableFilter<"Category"> | string | null
    expenses?: ExpenseListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    color?: StringNullableFilter<"Category"> | string | null
    expenses?: ExpenseListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    color?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    target?: FloatFilter<"Goal"> | number
    progress?: FloatFilter<"Goal"> | number
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    userId?: StringFilter<"Goal"> | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    category?: StringNullableFilter<"Goal"> | string | null
    imageUrl?: StringNullableFilter<"Goal"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    category?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    title?: StringFilter<"Goal"> | string
    target?: FloatFilter<"Goal"> | number
    progress?: FloatFilter<"Goal"> | number
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    userId?: StringFilter<"Goal"> | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    category?: StringNullableFilter<"Goal"> | string | null
    imageUrl?: StringNullableFilter<"Goal"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    category?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Goal"> | string
    title?: StringWithAggregatesFilter<"Goal"> | string
    target?: FloatWithAggregatesFilter<"Goal"> | number
    progress?: FloatWithAggregatesFilter<"Goal"> | number
    status?: EnumGoalStatusWithAggregatesFilter<"Goal"> | $Enums.GoalStatus
    userId?: StringWithAggregatesFilter<"Goal"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Goal"> | Date | string
    category?: StringNullableWithAggregatesFilter<"Goal"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Goal"> | string | null
  }

  export type BalanceWhereInput = {
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    id?: StringFilter<"Balance"> | string
    value?: FloatFilter<"Balance"> | number
    date?: DateTimeFilter<"Balance"> | Date | string
    userId?: StringFilter<"Balance"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    value?: FloatFilter<"Balance"> | number
    date?: DateTimeFilter<"Balance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BalanceOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    _count?: BalanceCountOrderByAggregateInput
    _avg?: BalanceAvgOrderByAggregateInput
    _max?: BalanceMaxOrderByAggregateInput
    _min?: BalanceMinOrderByAggregateInput
    _sum?: BalanceSumOrderByAggregateInput
  }

  export type BalanceScalarWhereWithAggregatesInput = {
    AND?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    OR?: BalanceScalarWhereWithAggregatesInput[]
    NOT?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Balance"> | string
    value?: FloatWithAggregatesFilter<"Balance"> | number
    date?: DateTimeWithAggregatesFilter<"Balance"> | Date | string
    userId?: StringWithAggregatesFilter<"Balance"> | string
  }

  export type IncomeWhereInput = {
    AND?: IncomeWhereInput | IncomeWhereInput[]
    OR?: IncomeWhereInput[]
    NOT?: IncomeWhereInput | IncomeWhereInput[]
    id?: StringFilter<"Income"> | string
    date?: DateTimeFilter<"Income"> | Date | string
    userId?: StringFilter<"Income"> | string
    income?: FloatFilter<"Income"> | number
    extraincome?: FloatFilter<"Income"> | number
    otherincome?: FloatFilter<"Income"> | number
    month?: DateTimeFilter<"Income"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IncomeOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    income?: SortOrder
    extraincome?: SortOrder
    otherincome?: SortOrder
    month?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IncomeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncomeWhereInput | IncomeWhereInput[]
    OR?: IncomeWhereInput[]
    NOT?: IncomeWhereInput | IncomeWhereInput[]
    date?: DateTimeFilter<"Income"> | Date | string
    userId?: StringFilter<"Income"> | string
    income?: FloatFilter<"Income"> | number
    extraincome?: FloatFilter<"Income"> | number
    otherincome?: FloatFilter<"Income"> | number
    month?: DateTimeFilter<"Income"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IncomeOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    income?: SortOrder
    extraincome?: SortOrder
    otherincome?: SortOrder
    month?: SortOrder
    _count?: IncomeCountOrderByAggregateInput
    _avg?: IncomeAvgOrderByAggregateInput
    _max?: IncomeMaxOrderByAggregateInput
    _min?: IncomeMinOrderByAggregateInput
    _sum?: IncomeSumOrderByAggregateInput
  }

  export type IncomeScalarWhereWithAggregatesInput = {
    AND?: IncomeScalarWhereWithAggregatesInput | IncomeScalarWhereWithAggregatesInput[]
    OR?: IncomeScalarWhereWithAggregatesInput[]
    NOT?: IncomeScalarWhereWithAggregatesInput | IncomeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Income"> | string
    date?: DateTimeWithAggregatesFilter<"Income"> | Date | string
    userId?: StringWithAggregatesFilter<"Income"> | string
    income?: FloatWithAggregatesFilter<"Income"> | number
    extraincome?: FloatWithAggregatesFilter<"Income"> | number
    otherincome?: FloatWithAggregatesFilter<"Income"> | number
    month?: DateTimeWithAggregatesFilter<"Income"> | Date | string
  }

  export type IncomeSummaryWhereInput = {
    AND?: IncomeSummaryWhereInput | IncomeSummaryWhereInput[]
    OR?: IncomeSummaryWhereInput[]
    NOT?: IncomeSummaryWhereInput | IncomeSummaryWhereInput[]
    id?: StringFilter<"IncomeSummary"> | string
    userId?: StringFilter<"IncomeSummary"> | string
    total?: FloatFilter<"IncomeSummary"> | number
    impostoRenda?: FloatFilter<"IncomeSummary"> | number
    createdAt?: DateTimeFilter<"IncomeSummary"> | Date | string
    month?: DateTimeFilter<"IncomeSummary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type IncomeSummaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    impostoRenda?: SortOrder
    createdAt?: SortOrder
    month?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type IncomeSummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IncomeSummaryWhereInput | IncomeSummaryWhereInput[]
    OR?: IncomeSummaryWhereInput[]
    NOT?: IncomeSummaryWhereInput | IncomeSummaryWhereInput[]
    userId?: StringFilter<"IncomeSummary"> | string
    total?: FloatFilter<"IncomeSummary"> | number
    impostoRenda?: FloatFilter<"IncomeSummary"> | number
    createdAt?: DateTimeFilter<"IncomeSummary"> | Date | string
    month?: DateTimeFilter<"IncomeSummary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type IncomeSummaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    impostoRenda?: SortOrder
    createdAt?: SortOrder
    month?: SortOrder
    _count?: IncomeSummaryCountOrderByAggregateInput
    _avg?: IncomeSummaryAvgOrderByAggregateInput
    _max?: IncomeSummaryMaxOrderByAggregateInput
    _min?: IncomeSummaryMinOrderByAggregateInput
    _sum?: IncomeSummarySumOrderByAggregateInput
  }

  export type IncomeSummaryScalarWhereWithAggregatesInput = {
    AND?: IncomeSummaryScalarWhereWithAggregatesInput | IncomeSummaryScalarWhereWithAggregatesInput[]
    OR?: IncomeSummaryScalarWhereWithAggregatesInput[]
    NOT?: IncomeSummaryScalarWhereWithAggregatesInput | IncomeSummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IncomeSummary"> | string
    userId?: StringWithAggregatesFilter<"IncomeSummary"> | string
    total?: FloatWithAggregatesFilter<"IncomeSummary"> | number
    impostoRenda?: FloatWithAggregatesFilter<"IncomeSummary"> | number
    createdAt?: DateTimeWithAggregatesFilter<"IncomeSummary"> | Date | string
    month?: DateTimeWithAggregatesFilter<"IncomeSummary"> | Date | string
  }

  export type ExpenseAnalysisWhereInput = {
    AND?: ExpenseAnalysisWhereInput | ExpenseAnalysisWhereInput[]
    OR?: ExpenseAnalysisWhereInput[]
    NOT?: ExpenseAnalysisWhereInput | ExpenseAnalysisWhereInput[]
    id?: StringFilter<"ExpenseAnalysis"> | string
    userId?: StringFilter<"ExpenseAnalysis"> | string
    total?: FloatFilter<"ExpenseAnalysis"> | number
    categoriaMaiorGasto?: FloatFilter<"ExpenseAnalysis"> | number
    diferencamensal?: FloatFilter<"ExpenseAnalysis"> | number
    createdAt?: DateTimeFilter<"ExpenseAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExpenseAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    categoriaMaiorGasto?: SortOrder
    diferencamensal?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExpenseAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseAnalysisWhereInput | ExpenseAnalysisWhereInput[]
    OR?: ExpenseAnalysisWhereInput[]
    NOT?: ExpenseAnalysisWhereInput | ExpenseAnalysisWhereInput[]
    userId?: StringFilter<"ExpenseAnalysis"> | string
    total?: FloatFilter<"ExpenseAnalysis"> | number
    categoriaMaiorGasto?: FloatFilter<"ExpenseAnalysis"> | number
    diferencamensal?: FloatFilter<"ExpenseAnalysis"> | number
    createdAt?: DateTimeFilter<"ExpenseAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExpenseAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    categoriaMaiorGasto?: SortOrder
    diferencamensal?: SortOrder
    createdAt?: SortOrder
    _count?: ExpenseAnalysisCountOrderByAggregateInput
    _avg?: ExpenseAnalysisAvgOrderByAggregateInput
    _max?: ExpenseAnalysisMaxOrderByAggregateInput
    _min?: ExpenseAnalysisMinOrderByAggregateInput
    _sum?: ExpenseAnalysisSumOrderByAggregateInput
  }

  export type ExpenseAnalysisScalarWhereWithAggregatesInput = {
    AND?: ExpenseAnalysisScalarWhereWithAggregatesInput | ExpenseAnalysisScalarWhereWithAggregatesInput[]
    OR?: ExpenseAnalysisScalarWhereWithAggregatesInput[]
    NOT?: ExpenseAnalysisScalarWhereWithAggregatesInput | ExpenseAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExpenseAnalysis"> | string
    userId?: StringWithAggregatesFilter<"ExpenseAnalysis"> | string
    total?: FloatWithAggregatesFilter<"ExpenseAnalysis"> | number
    categoriaMaiorGasto?: FloatWithAggregatesFilter<"ExpenseAnalysis"> | number
    diferencamensal?: FloatWithAggregatesFilter<"ExpenseAnalysis"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ExpenseAnalysis"> | Date | string
  }

  export type FormsWhereInput = {
    AND?: FormsWhereInput | FormsWhereInput[]
    OR?: FormsWhereInput[]
    NOT?: FormsWhereInput | FormsWhereInput[]
    id?: StringFilter<"Forms"> | string
    media_salarial?: StringFilter<"Forms"> | string
    idade?: StringFilter<"Forms"> | string
    quantidade_filhos?: StringFilter<"Forms"> | string
    dinheiro?: StringFilter<"Forms"> | string
    createdAt?: DateTimeFilter<"Forms"> | Date | string
    userId?: StringFilter<"Forms"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FormsOrderByWithRelationInput = {
    id?: SortOrder
    media_salarial?: SortOrder
    idade?: SortOrder
    quantidade_filhos?: SortOrder
    dinheiro?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FormsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FormsWhereInput | FormsWhereInput[]
    OR?: FormsWhereInput[]
    NOT?: FormsWhereInput | FormsWhereInput[]
    media_salarial?: StringFilter<"Forms"> | string
    idade?: StringFilter<"Forms"> | string
    quantidade_filhos?: StringFilter<"Forms"> | string
    dinheiro?: StringFilter<"Forms"> | string
    createdAt?: DateTimeFilter<"Forms"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type FormsOrderByWithAggregationInput = {
    id?: SortOrder
    media_salarial?: SortOrder
    idade?: SortOrder
    quantidade_filhos?: SortOrder
    dinheiro?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: FormsCountOrderByAggregateInput
    _max?: FormsMaxOrderByAggregateInput
    _min?: FormsMinOrderByAggregateInput
  }

  export type FormsScalarWhereWithAggregatesInput = {
    AND?: FormsScalarWhereWithAggregatesInput | FormsScalarWhereWithAggregatesInput[]
    OR?: FormsScalarWhereWithAggregatesInput[]
    NOT?: FormsScalarWhereWithAggregatesInput | FormsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Forms"> | string
    media_salarial?: StringWithAggregatesFilter<"Forms"> | string
    idade?: StringWithAggregatesFilter<"Forms"> | string
    quantidade_filhos?: StringWithAggregatesFilter<"Forms"> | string
    dinheiro?: StringWithAggregatesFilter<"Forms"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Forms"> | Date | string
    userId?: StringWithAggregatesFilter<"Forms"> | string
  }

  export type FinancialAnalysisWhereInput = {
    AND?: FinancialAnalysisWhereInput | FinancialAnalysisWhereInput[]
    OR?: FinancialAnalysisWhereInput[]
    NOT?: FinancialAnalysisWhereInput | FinancialAnalysisWhereInput[]
    id?: StringFilter<"FinancialAnalysis"> | string
    userId?: StringFilter<"FinancialAnalysis"> | string
    month?: IntFilter<"FinancialAnalysis"> | number
    year?: IntFilter<"FinancialAnalysis"> | number
    data?: JsonFilter<"FinancialAnalysis">
    createdAt?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FinancialAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FinancialAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FinancialAnalysisWhereInput | FinancialAnalysisWhereInput[]
    OR?: FinancialAnalysisWhereInput[]
    NOT?: FinancialAnalysisWhereInput | FinancialAnalysisWhereInput[]
    userId?: StringFilter<"FinancialAnalysis"> | string
    month?: IntFilter<"FinancialAnalysis"> | number
    year?: IntFilter<"FinancialAnalysis"> | number
    data?: JsonFilter<"FinancialAnalysis">
    createdAt?: DateTimeFilter<"FinancialAnalysis"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type FinancialAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: FinancialAnalysisCountOrderByAggregateInput
    _avg?: FinancialAnalysisAvgOrderByAggregateInput
    _max?: FinancialAnalysisMaxOrderByAggregateInput
    _min?: FinancialAnalysisMinOrderByAggregateInput
    _sum?: FinancialAnalysisSumOrderByAggregateInput
  }

  export type FinancialAnalysisScalarWhereWithAggregatesInput = {
    AND?: FinancialAnalysisScalarWhereWithAggregatesInput | FinancialAnalysisScalarWhereWithAggregatesInput[]
    OR?: FinancialAnalysisScalarWhereWithAggregatesInput[]
    NOT?: FinancialAnalysisScalarWhereWithAggregatesInput | FinancialAnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FinancialAnalysis"> | string
    userId?: StringWithAggregatesFilter<"FinancialAnalysis"> | string
    month?: IntWithAggregatesFilter<"FinancialAnalysis"> | number
    year?: IntWithAggregatesFilter<"FinancialAnalysis"> | number
    data?: JsonWithAggregatesFilter<"FinancialAnalysis">
    createdAt?: DateTimeWithAggregatesFilter<"FinancialAnalysis"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceCreateNestedOneWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisCreateNestedManyWithoutUserInput
    Forms?: FormsCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    Forms?: FormsUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    Forms?: FormsUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    Forms?: FormsUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    avatarUrl?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExpenseCreateInput = {
    id?: string
    title: string
    amount: number
    date: Date | string
    isCredit?: boolean
    totalInstallments?: number | null
    currentInstallment?: number | null
    category: CategoryCreateNestedOneWithoutExpensesInput
    user: UserCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    title: string
    amount: number
    date: Date | string
    isCredit?: boolean
    totalInstallments?: number | null
    currentInstallment?: number | null
    categoryId: string
    userId: string
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    category?: CategoryUpdateOneRequiredWithoutExpensesNestedInput
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    title: string
    amount: number
    date: Date | string
    isCredit?: boolean
    totalInstallments?: number | null
    currentInstallment?: number | null
    categoryId: string
    userId: string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    color?: string | null
    expenses?: ExpenseCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    color?: string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: ExpenseUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    color?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalCreateInput = {
    id?: string
    title: string
    target: number
    progress?: number
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    category?: string | null
    imageUrl?: string | null
    user: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    id?: string
    title: string
    target: number
    progress?: number
    status?: $Enums.GoalStatus
    userId: string
    createdAt?: Date | string
    category?: string | null
    imageUrl?: string | null
  }

  export type GoalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalCreateManyInput = {
    id?: string
    title: string
    target: number
    progress?: number
    status?: $Enums.GoalStatus
    userId: string
    createdAt?: Date | string
    category?: string | null
    imageUrl?: string | null
  }

  export type GoalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BalanceCreateInput = {
    id?: string
    value: number
    date: Date | string
    user: UserCreateNestedOneWithoutBalanceInput
  }

  export type BalanceUncheckedCreateInput = {
    id?: string
    value: number
    date: Date | string
    userId: string
  }

  export type BalanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type BalanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BalanceCreateManyInput = {
    id?: string
    value: number
    date: Date | string
    userId: string
  }

  export type BalanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IncomeCreateInput = {
    id?: string
    date: Date | string
    income: number
    extraincome: number
    otherincome: number
    month: Date | string
    user: UserCreateNestedOneWithoutIncomesInput
  }

  export type IncomeUncheckedCreateInput = {
    id?: string
    date: Date | string
    userId: string
    income: number
    extraincome: number
    otherincome: number
    month: Date | string
  }

  export type IncomeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    extraincome?: FloatFieldUpdateOperationsInput | number
    otherincome?: FloatFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIncomesNestedInput
  }

  export type IncomeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    income?: FloatFieldUpdateOperationsInput | number
    extraincome?: FloatFieldUpdateOperationsInput | number
    otherincome?: FloatFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeCreateManyInput = {
    id?: string
    date: Date | string
    userId: string
    income: number
    extraincome: number
    otherincome: number
    month: Date | string
  }

  export type IncomeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    extraincome?: FloatFieldUpdateOperationsInput | number
    otherincome?: FloatFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    income?: FloatFieldUpdateOperationsInput | number
    extraincome?: FloatFieldUpdateOperationsInput | number
    otherincome?: FloatFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeSummaryCreateInput = {
    id?: string
    total: number
    impostoRenda: number
    createdAt: Date | string
    month: Date | string
    user: UserCreateNestedOneWithoutIncomesummaryInput
  }

  export type IncomeSummaryUncheckedCreateInput = {
    id?: string
    userId: string
    total: number
    impostoRenda: number
    createdAt: Date | string
    month: Date | string
  }

  export type IncomeSummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    impostoRenda?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutIncomesummaryNestedInput
  }

  export type IncomeSummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    impostoRenda?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeSummaryCreateManyInput = {
    id?: string
    userId: string
    total: number
    impostoRenda: number
    createdAt: Date | string
    month: Date | string
  }

  export type IncomeSummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    impostoRenda?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeSummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    impostoRenda?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseAnalysisCreateInput = {
    id?: string
    total: number
    categoriaMaiorGasto: number
    diferencamensal: number
    createdAt: Date | string
    user: UserCreateNestedOneWithoutExpensesAnalysisInput
  }

  export type ExpenseAnalysisUncheckedCreateInput = {
    id?: string
    userId: string
    total: number
    categoriaMaiorGasto: number
    diferencamensal: number
    createdAt: Date | string
  }

  export type ExpenseAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    categoriaMaiorGasto?: FloatFieldUpdateOperationsInput | number
    diferencamensal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExpensesAnalysisNestedInput
  }

  export type ExpenseAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    categoriaMaiorGasto?: FloatFieldUpdateOperationsInput | number
    diferencamensal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseAnalysisCreateManyInput = {
    id?: string
    userId: string
    total: number
    categoriaMaiorGasto: number
    diferencamensal: number
    createdAt: Date | string
  }

  export type ExpenseAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    categoriaMaiorGasto?: FloatFieldUpdateOperationsInput | number
    diferencamensal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    categoriaMaiorGasto?: FloatFieldUpdateOperationsInput | number
    diferencamensal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormsCreateInput = {
    id?: string
    media_salarial: string
    idade: string
    quantidade_filhos: string
    dinheiro: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFormsInput
  }

  export type FormsUncheckedCreateInput = {
    id?: string
    media_salarial: string
    idade: string
    quantidade_filhos: string
    dinheiro: string
    createdAt?: Date | string
    userId: string
  }

  export type FormsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_salarial?: StringFieldUpdateOperationsInput | string
    idade?: StringFieldUpdateOperationsInput | string
    quantidade_filhos?: StringFieldUpdateOperationsInput | string
    dinheiro?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFormsNestedInput
  }

  export type FormsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_salarial?: StringFieldUpdateOperationsInput | string
    idade?: StringFieldUpdateOperationsInput | string
    quantidade_filhos?: StringFieldUpdateOperationsInput | string
    dinheiro?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FormsCreateManyInput = {
    id?: string
    media_salarial: string
    idade: string
    quantidade_filhos: string
    dinheiro: string
    createdAt?: Date | string
    userId: string
  }

  export type FormsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_salarial?: StringFieldUpdateOperationsInput | string
    idade?: StringFieldUpdateOperationsInput | string
    quantidade_filhos?: StringFieldUpdateOperationsInput | string
    dinheiro?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_salarial?: StringFieldUpdateOperationsInput | string
    idade?: StringFieldUpdateOperationsInput | string
    quantidade_filhos?: StringFieldUpdateOperationsInput | string
    dinheiro?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type FinancialAnalysisCreateInput = {
    id?: string
    month: number
    year: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFinancialAnalysisInput
  }

  export type FinancialAnalysisUncheckedCreateInput = {
    id?: string
    userId: string
    month: number
    year: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinancialAnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFinancialAnalysisNestedInput
  }

  export type FinancialAnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisCreateManyInput = {
    id?: string
    userId: string
    month: number
    year: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinancialAnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BalanceNullableScalarRelationFilter = {
    is?: BalanceWhereInput | null
    isNot?: BalanceWhereInput | null
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type ExpenseAnalysisListRelationFilter = {
    every?: ExpenseAnalysisWhereInput
    some?: ExpenseAnalysisWhereInput
    none?: ExpenseAnalysisWhereInput
  }

  export type FinancialAnalysisListRelationFilter = {
    every?: FinancialAnalysisWhereInput
    some?: FinancialAnalysisWhereInput
    none?: FinancialAnalysisWhereInput
  }

  export type FormsListRelationFilter = {
    every?: FormsWhereInput
    some?: FormsWhereInput
    none?: FormsWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type IncomeListRelationFilter = {
    every?: IncomeWhereInput
    some?: IncomeWhereInput
    none?: IncomeWhereInput
  }

  export type IncomeSummaryListRelationFilter = {
    every?: IncomeSummaryWhereInput
    some?: IncomeSummaryWhereInput
    none?: IncomeSummaryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinancialAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncomeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IncomeSummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    isCredit?: SortOrder
    totalInstallments?: SortOrder
    currentInstallment?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
    totalInstallments?: SortOrder
    currentInstallment?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    isCredit?: SortOrder
    totalInstallments?: SortOrder
    currentInstallment?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    isCredit?: SortOrder
    totalInstallments?: SortOrder
    currentInstallment?: SortOrder
    categoryId?: SortOrder
    userId?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
    totalInstallments?: SortOrder
    currentInstallment?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
  }

  export type EnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    target?: SortOrder
    progress?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    target?: SortOrder
    progress?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    target?: SortOrder
    progress?: SortOrder
  }

  export type EnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    date?: SortOrder
    userId?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type IncomeCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    income?: SortOrder
    extraincome?: SortOrder
    otherincome?: SortOrder
    month?: SortOrder
  }

  export type IncomeAvgOrderByAggregateInput = {
    income?: SortOrder
    extraincome?: SortOrder
    otherincome?: SortOrder
  }

  export type IncomeMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    income?: SortOrder
    extraincome?: SortOrder
    otherincome?: SortOrder
    month?: SortOrder
  }

  export type IncomeMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    income?: SortOrder
    extraincome?: SortOrder
    otherincome?: SortOrder
    month?: SortOrder
  }

  export type IncomeSumOrderByAggregateInput = {
    income?: SortOrder
    extraincome?: SortOrder
    otherincome?: SortOrder
  }

  export type IncomeSummaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    impostoRenda?: SortOrder
    createdAt?: SortOrder
    month?: SortOrder
  }

  export type IncomeSummaryAvgOrderByAggregateInput = {
    total?: SortOrder
    impostoRenda?: SortOrder
  }

  export type IncomeSummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    impostoRenda?: SortOrder
    createdAt?: SortOrder
    month?: SortOrder
  }

  export type IncomeSummaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    impostoRenda?: SortOrder
    createdAt?: SortOrder
    month?: SortOrder
  }

  export type IncomeSummarySumOrderByAggregateInput = {
    total?: SortOrder
    impostoRenda?: SortOrder
  }

  export type ExpenseAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    categoriaMaiorGasto?: SortOrder
    diferencamensal?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAnalysisAvgOrderByAggregateInput = {
    total?: SortOrder
    categoriaMaiorGasto?: SortOrder
    diferencamensal?: SortOrder
  }

  export type ExpenseAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    categoriaMaiorGasto?: SortOrder
    diferencamensal?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    total?: SortOrder
    categoriaMaiorGasto?: SortOrder
    diferencamensal?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAnalysisSumOrderByAggregateInput = {
    total?: SortOrder
    categoriaMaiorGasto?: SortOrder
    diferencamensal?: SortOrder
  }

  export type FormsCountOrderByAggregateInput = {
    id?: SortOrder
    media_salarial?: SortOrder
    idade?: SortOrder
    quantidade_filhos?: SortOrder
    dinheiro?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FormsMaxOrderByAggregateInput = {
    id?: SortOrder
    media_salarial?: SortOrder
    idade?: SortOrder
    quantidade_filhos?: SortOrder
    dinheiro?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type FormsMinOrderByAggregateInput = {
    id?: SortOrder
    media_salarial?: SortOrder
    idade?: SortOrder
    quantidade_filhos?: SortOrder
    dinheiro?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FinancialAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialAnalysisAvgOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type FinancialAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    month?: SortOrder
    year?: SortOrder
    createdAt?: SortOrder
  }

  export type FinancialAnalysisSumOrderByAggregateInput = {
    month?: SortOrder
    year?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BalanceCreateNestedOneWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    connect?: BalanceWhereUniqueInput
  }

  export type ExpenseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseAnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseAnalysisCreateWithoutUserInput, ExpenseAnalysisUncheckedCreateWithoutUserInput> | ExpenseAnalysisCreateWithoutUserInput[] | ExpenseAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseAnalysisCreateOrConnectWithoutUserInput | ExpenseAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseAnalysisCreateManyUserInputEnvelope
    connect?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
  }

  export type FinancialAnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput> | FinancialAnalysisCreateWithoutUserInput[] | FinancialAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutUserInput | FinancialAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: FinancialAnalysisCreateManyUserInputEnvelope
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
  }

  export type FormsCreateNestedManyWithoutUserInput = {
    create?: XOR<FormsCreateWithoutUserInput, FormsUncheckedCreateWithoutUserInput> | FormsCreateWithoutUserInput[] | FormsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormsCreateOrConnectWithoutUserInput | FormsCreateOrConnectWithoutUserInput[]
    createMany?: FormsCreateManyUserInputEnvelope
    connect?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type IncomeCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type IncomeSummaryCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomeSummaryCreateWithoutUserInput, IncomeSummaryUncheckedCreateWithoutUserInput> | IncomeSummaryCreateWithoutUserInput[] | IncomeSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeSummaryCreateOrConnectWithoutUserInput | IncomeSummaryCreateOrConnectWithoutUserInput[]
    createMany?: IncomeSummaryCreateManyUserInputEnvelope
    connect?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
  }

  export type BalanceUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    connect?: BalanceWhereUniqueInput
  }

  export type ExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseAnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseAnalysisCreateWithoutUserInput, ExpenseAnalysisUncheckedCreateWithoutUserInput> | ExpenseAnalysisCreateWithoutUserInput[] | ExpenseAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseAnalysisCreateOrConnectWithoutUserInput | ExpenseAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseAnalysisCreateManyUserInputEnvelope
    connect?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
  }

  export type FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput> | FinancialAnalysisCreateWithoutUserInput[] | FinancialAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutUserInput | FinancialAnalysisCreateOrConnectWithoutUserInput[]
    createMany?: FinancialAnalysisCreateManyUserInputEnvelope
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
  }

  export type FormsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FormsCreateWithoutUserInput, FormsUncheckedCreateWithoutUserInput> | FormsCreateWithoutUserInput[] | FormsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormsCreateOrConnectWithoutUserInput | FormsCreateOrConnectWithoutUserInput[]
    createMany?: FormsCreateManyUserInputEnvelope
    connect?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type IncomeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
  }

  export type IncomeSummaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IncomeSummaryCreateWithoutUserInput, IncomeSummaryUncheckedCreateWithoutUserInput> | IncomeSummaryCreateWithoutUserInput[] | IncomeSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeSummaryCreateOrConnectWithoutUserInput | IncomeSummaryCreateOrConnectWithoutUserInput[]
    createMany?: IncomeSummaryCreateManyUserInputEnvelope
    connect?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BalanceUpdateOneWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    upsert?: BalanceUpsertWithoutUserInput
    disconnect?: BalanceWhereInput | boolean
    delete?: BalanceWhereInput | boolean
    connect?: BalanceWhereUniqueInput
    update?: XOR<XOR<BalanceUpdateToOneWithWhereWithoutUserInput, BalanceUpdateWithoutUserInput>, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseAnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseAnalysisCreateWithoutUserInput, ExpenseAnalysisUncheckedCreateWithoutUserInput> | ExpenseAnalysisCreateWithoutUserInput[] | ExpenseAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseAnalysisCreateOrConnectWithoutUserInput | ExpenseAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseAnalysisUpsertWithWhereUniqueWithoutUserInput | ExpenseAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseAnalysisCreateManyUserInputEnvelope
    set?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
    disconnect?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
    delete?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
    connect?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
    update?: ExpenseAnalysisUpdateWithWhereUniqueWithoutUserInput | ExpenseAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseAnalysisUpdateManyWithWhereWithoutUserInput | ExpenseAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseAnalysisScalarWhereInput | ExpenseAnalysisScalarWhereInput[]
  }

  export type FinancialAnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput> | FinancialAnalysisCreateWithoutUserInput[] | FinancialAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutUserInput | FinancialAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput | FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinancialAnalysisCreateManyUserInputEnvelope
    set?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    disconnect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    delete?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    update?: FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput | FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinancialAnalysisUpdateManyWithWhereWithoutUserInput | FinancialAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
  }

  export type FormsUpdateManyWithoutUserNestedInput = {
    create?: XOR<FormsCreateWithoutUserInput, FormsUncheckedCreateWithoutUserInput> | FormsCreateWithoutUserInput[] | FormsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormsCreateOrConnectWithoutUserInput | FormsCreateOrConnectWithoutUserInput[]
    upsert?: FormsUpsertWithWhereUniqueWithoutUserInput | FormsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FormsCreateManyUserInputEnvelope
    set?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
    disconnect?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
    delete?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
    connect?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
    update?: FormsUpdateWithWhereUniqueWithoutUserInput | FormsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FormsUpdateManyWithWhereWithoutUserInput | FormsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FormsScalarWhereInput | FormsScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type IncomeUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutUserInput | IncomeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutUserInput | IncomeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutUserInput | IncomeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type IncomeSummaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomeSummaryCreateWithoutUserInput, IncomeSummaryUncheckedCreateWithoutUserInput> | IncomeSummaryCreateWithoutUserInput[] | IncomeSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeSummaryCreateOrConnectWithoutUserInput | IncomeSummaryCreateOrConnectWithoutUserInput[]
    upsert?: IncomeSummaryUpsertWithWhereUniqueWithoutUserInput | IncomeSummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomeSummaryCreateManyUserInputEnvelope
    set?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
    disconnect?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
    delete?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
    connect?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
    update?: IncomeSummaryUpdateWithWhereUniqueWithoutUserInput | IncomeSummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomeSummaryUpdateManyWithWhereWithoutUserInput | IncomeSummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomeSummaryScalarWhereInput | IncomeSummaryScalarWhereInput[]
  }

  export type BalanceUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput
    upsert?: BalanceUpsertWithoutUserInput
    disconnect?: BalanceWhereInput | boolean
    delete?: BalanceWhereInput | boolean
    connect?: BalanceWhereUniqueInput
    update?: XOR<XOR<BalanceUpdateToOneWithWhereWithoutUserInput, BalanceUpdateWithoutUserInput>, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseAnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseAnalysisCreateWithoutUserInput, ExpenseAnalysisUncheckedCreateWithoutUserInput> | ExpenseAnalysisCreateWithoutUserInput[] | ExpenseAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseAnalysisCreateOrConnectWithoutUserInput | ExpenseAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseAnalysisUpsertWithWhereUniqueWithoutUserInput | ExpenseAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseAnalysisCreateManyUserInputEnvelope
    set?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
    disconnect?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
    delete?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
    connect?: ExpenseAnalysisWhereUniqueInput | ExpenseAnalysisWhereUniqueInput[]
    update?: ExpenseAnalysisUpdateWithWhereUniqueWithoutUserInput | ExpenseAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseAnalysisUpdateManyWithWhereWithoutUserInput | ExpenseAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseAnalysisScalarWhereInput | ExpenseAnalysisScalarWhereInput[]
  }

  export type FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput> | FinancialAnalysisCreateWithoutUserInput[] | FinancialAnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FinancialAnalysisCreateOrConnectWithoutUserInput | FinancialAnalysisCreateOrConnectWithoutUserInput[]
    upsert?: FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput | FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FinancialAnalysisCreateManyUserInputEnvelope
    set?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    disconnect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    delete?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    connect?: FinancialAnalysisWhereUniqueInput | FinancialAnalysisWhereUniqueInput[]
    update?: FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput | FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FinancialAnalysisUpdateManyWithWhereWithoutUserInput | FinancialAnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
  }

  export type FormsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FormsCreateWithoutUserInput, FormsUncheckedCreateWithoutUserInput> | FormsCreateWithoutUserInput[] | FormsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FormsCreateOrConnectWithoutUserInput | FormsCreateOrConnectWithoutUserInput[]
    upsert?: FormsUpsertWithWhereUniqueWithoutUserInput | FormsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FormsCreateManyUserInputEnvelope
    set?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
    disconnect?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
    delete?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
    connect?: FormsWhereUniqueInput | FormsWhereUniqueInput[]
    update?: FormsUpdateWithWhereUniqueWithoutUserInput | FormsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FormsUpdateManyWithWhereWithoutUserInput | FormsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FormsScalarWhereInput | FormsScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput> | GoalCreateWithoutUserInput[] | GoalUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutUserInput | GoalCreateOrConnectWithoutUserInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutUserInput | GoalUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GoalCreateManyUserInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutUserInput | GoalUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutUserInput | GoalUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type IncomeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput> | IncomeCreateWithoutUserInput[] | IncomeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeCreateOrConnectWithoutUserInput | IncomeCreateOrConnectWithoutUserInput[]
    upsert?: IncomeUpsertWithWhereUniqueWithoutUserInput | IncomeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomeCreateManyUserInputEnvelope
    set?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    disconnect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    delete?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    connect?: IncomeWhereUniqueInput | IncomeWhereUniqueInput[]
    update?: IncomeUpdateWithWhereUniqueWithoutUserInput | IncomeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomeUpdateManyWithWhereWithoutUserInput | IncomeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
  }

  export type IncomeSummaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IncomeSummaryCreateWithoutUserInput, IncomeSummaryUncheckedCreateWithoutUserInput> | IncomeSummaryCreateWithoutUserInput[] | IncomeSummaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IncomeSummaryCreateOrConnectWithoutUserInput | IncomeSummaryCreateOrConnectWithoutUserInput[]
    upsert?: IncomeSummaryUpsertWithWhereUniqueWithoutUserInput | IncomeSummaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IncomeSummaryCreateManyUserInputEnvelope
    set?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
    disconnect?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
    delete?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
    connect?: IncomeSummaryWhereUniqueInput | IncomeSummaryWhereUniqueInput[]
    update?: IncomeSummaryUpdateWithWhereUniqueWithoutUserInput | IncomeSummaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IncomeSummaryUpdateManyWithWhereWithoutUserInput | IncomeSummaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IncomeSummaryScalarWhereInput | IncomeSummaryScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutExpensesInput = {
    create?: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput
    upsert?: CategoryUpsertWithoutExpensesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutExpensesInput, CategoryUpdateWithoutExpensesInput>, CategoryUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type ExpenseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type ExpenseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCategoryInput | ExpenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCategoryInput | ExpenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCategoryInput | ExpenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput> | ExpenseCreateWithoutCategoryInput[] | ExpenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput | ExpenseCreateOrConnectWithoutCategoryInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutCategoryInput | ExpenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ExpenseCreateManyCategoryInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutCategoryInput | ExpenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutCategoryInput | ExpenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumGoalStatusFieldUpdateOperationsInput = {
    set?: $Enums.GoalStatus
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserCreateNestedOneWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    upsert?: UserUpsertWithoutBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalanceInput, UserUpdateWithoutBalanceInput>, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserCreateNestedOneWithoutIncomesInput = {
    create?: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutIncomesNestedInput = {
    create?: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomesInput
    upsert?: UserUpsertWithoutIncomesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncomesInput, UserUpdateWithoutIncomesInput>, UserUncheckedUpdateWithoutIncomesInput>
  }

  export type UserCreateNestedOneWithoutIncomesummaryInput = {
    create?: XOR<UserCreateWithoutIncomesummaryInput, UserUncheckedCreateWithoutIncomesummaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomesummaryInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutIncomesummaryNestedInput = {
    create?: XOR<UserCreateWithoutIncomesummaryInput, UserUncheckedCreateWithoutIncomesummaryInput>
    connectOrCreate?: UserCreateOrConnectWithoutIncomesummaryInput
    upsert?: UserUpsertWithoutIncomesummaryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIncomesummaryInput, UserUpdateWithoutIncomesummaryInput>, UserUncheckedUpdateWithoutIncomesummaryInput>
  }

  export type UserCreateNestedOneWithoutExpensesAnalysisInput = {
    create?: XOR<UserCreateWithoutExpensesAnalysisInput, UserUncheckedCreateWithoutExpensesAnalysisInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesAnalysisInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExpensesAnalysisNestedInput = {
    create?: XOR<UserCreateWithoutExpensesAnalysisInput, UserUncheckedCreateWithoutExpensesAnalysisInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesAnalysisInput
    upsert?: UserUpsertWithoutExpensesAnalysisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesAnalysisInput, UserUpdateWithoutExpensesAnalysisInput>, UserUncheckedUpdateWithoutExpensesAnalysisInput>
  }

  export type UserCreateNestedOneWithoutFormsInput = {
    create?: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFormsNestedInput = {
    create?: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFormsInput
    upsert?: UserUpsertWithoutFormsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFormsInput, UserUpdateWithoutFormsInput>, UserUncheckedUpdateWithoutFormsInput>
  }

  export type UserCreateNestedOneWithoutFinancialAnalysisInput = {
    create?: XOR<UserCreateWithoutFinancialAnalysisInput, UserUncheckedCreateWithoutFinancialAnalysisInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialAnalysisInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutFinancialAnalysisNestedInput = {
    create?: XOR<UserCreateWithoutFinancialAnalysisInput, UserUncheckedCreateWithoutFinancialAnalysisInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinancialAnalysisInput
    upsert?: UserUpsertWithoutFinancialAnalysisInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinancialAnalysisInput, UserUpdateWithoutFinancialAnalysisInput>, UserUncheckedUpdateWithoutFinancialAnalysisInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGoalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusFilter<$PrismaModel> | $Enums.GoalStatus
  }

  export type NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GoalStatus | EnumGoalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.GoalStatus[] | ListEnumGoalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumGoalStatusWithAggregatesFilter<$PrismaModel> | $Enums.GoalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGoalStatusFilter<$PrismaModel>
    _max?: NestedEnumGoalStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BalanceCreateWithoutUserInput = {
    id?: string
    value: number
    date: Date | string
  }

  export type BalanceUncheckedCreateWithoutUserInput = {
    id?: string
    value: number
    date: Date | string
  }

  export type BalanceCreateOrConnectWithoutUserInput = {
    where: BalanceWhereUniqueInput
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type ExpenseCreateWithoutUserInput = {
    id?: string
    title: string
    amount: number
    date: Date | string
    isCredit?: boolean
    totalInstallments?: number | null
    currentInstallment?: number | null
    category: CategoryCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    amount: number
    date: Date | string
    isCredit?: boolean
    totalInstallments?: number | null
    currentInstallment?: number | null
    categoryId: string
  }

  export type ExpenseCreateOrConnectWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseCreateManyUserInputEnvelope = {
    data: ExpenseCreateManyUserInput | ExpenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseAnalysisCreateWithoutUserInput = {
    id?: string
    total: number
    categoriaMaiorGasto: number
    diferencamensal: number
    createdAt: Date | string
  }

  export type ExpenseAnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    total: number
    categoriaMaiorGasto: number
    diferencamensal: number
    createdAt: Date | string
  }

  export type ExpenseAnalysisCreateOrConnectWithoutUserInput = {
    where: ExpenseAnalysisWhereUniqueInput
    create: XOR<ExpenseAnalysisCreateWithoutUserInput, ExpenseAnalysisUncheckedCreateWithoutUserInput>
  }

  export type ExpenseAnalysisCreateManyUserInputEnvelope = {
    data: ExpenseAnalysisCreateManyUserInput | ExpenseAnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FinancialAnalysisCreateWithoutUserInput = {
    id?: string
    month: number
    year: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinancialAnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    month: number
    year: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FinancialAnalysisCreateOrConnectWithoutUserInput = {
    where: FinancialAnalysisWhereUniqueInput
    create: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput>
  }

  export type FinancialAnalysisCreateManyUserInputEnvelope = {
    data: FinancialAnalysisCreateManyUserInput | FinancialAnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FormsCreateWithoutUserInput = {
    id?: string
    media_salarial: string
    idade: string
    quantidade_filhos: string
    dinheiro: string
    createdAt?: Date | string
  }

  export type FormsUncheckedCreateWithoutUserInput = {
    id?: string
    media_salarial: string
    idade: string
    quantidade_filhos: string
    dinheiro: string
    createdAt?: Date | string
  }

  export type FormsCreateOrConnectWithoutUserInput = {
    where: FormsWhereUniqueInput
    create: XOR<FormsCreateWithoutUserInput, FormsUncheckedCreateWithoutUserInput>
  }

  export type FormsCreateManyUserInputEnvelope = {
    data: FormsCreateManyUserInput | FormsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutUserInput = {
    id?: string
    title: string
    target: number
    progress?: number
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    category?: string | null
    imageUrl?: string | null
  }

  export type GoalUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    target: number
    progress?: number
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    category?: string | null
    imageUrl?: string | null
  }

  export type GoalCreateOrConnectWithoutUserInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalCreateManyUserInputEnvelope = {
    data: GoalCreateManyUserInput | GoalCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncomeCreateWithoutUserInput = {
    id?: string
    date: Date | string
    income: number
    extraincome: number
    otherincome: number
    month: Date | string
  }

  export type IncomeUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    income: number
    extraincome: number
    otherincome: number
    month: Date | string
  }

  export type IncomeCreateOrConnectWithoutUserInput = {
    where: IncomeWhereUniqueInput
    create: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput>
  }

  export type IncomeCreateManyUserInputEnvelope = {
    data: IncomeCreateManyUserInput | IncomeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IncomeSummaryCreateWithoutUserInput = {
    id?: string
    total: number
    impostoRenda: number
    createdAt: Date | string
    month: Date | string
  }

  export type IncomeSummaryUncheckedCreateWithoutUserInput = {
    id?: string
    total: number
    impostoRenda: number
    createdAt: Date | string
    month: Date | string
  }

  export type IncomeSummaryCreateOrConnectWithoutUserInput = {
    where: IncomeSummaryWhereUniqueInput
    create: XOR<IncomeSummaryCreateWithoutUserInput, IncomeSummaryUncheckedCreateWithoutUserInput>
  }

  export type IncomeSummaryCreateManyUserInputEnvelope = {
    data: IncomeSummaryCreateManyUserInput | IncomeSummaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BalanceUpsertWithoutUserInput = {
    update: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
    where?: BalanceWhereInput
  }

  export type BalanceUpdateToOneWithWhereWithoutUserInput = {
    where?: BalanceWhereInput
    data: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type BalanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    title?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    date?: DateTimeFilter<"Expense"> | Date | string
    isCredit?: BoolFilter<"Expense"> | boolean
    totalInstallments?: IntNullableFilter<"Expense"> | number | null
    currentInstallment?: IntNullableFilter<"Expense"> | number | null
    categoryId?: StringFilter<"Expense"> | string
    userId?: StringFilter<"Expense"> | string
  }

  export type ExpenseAnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseAnalysisWhereUniqueInput
    update: XOR<ExpenseAnalysisUpdateWithoutUserInput, ExpenseAnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseAnalysisCreateWithoutUserInput, ExpenseAnalysisUncheckedCreateWithoutUserInput>
  }

  export type ExpenseAnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseAnalysisWhereUniqueInput
    data: XOR<ExpenseAnalysisUpdateWithoutUserInput, ExpenseAnalysisUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseAnalysisUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseAnalysisScalarWhereInput
    data: XOR<ExpenseAnalysisUpdateManyMutationInput, ExpenseAnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseAnalysisScalarWhereInput = {
    AND?: ExpenseAnalysisScalarWhereInput | ExpenseAnalysisScalarWhereInput[]
    OR?: ExpenseAnalysisScalarWhereInput[]
    NOT?: ExpenseAnalysisScalarWhereInput | ExpenseAnalysisScalarWhereInput[]
    id?: StringFilter<"ExpenseAnalysis"> | string
    userId?: StringFilter<"ExpenseAnalysis"> | string
    total?: FloatFilter<"ExpenseAnalysis"> | number
    categoriaMaiorGasto?: FloatFilter<"ExpenseAnalysis"> | number
    diferencamensal?: FloatFilter<"ExpenseAnalysis"> | number
    createdAt?: DateTimeFilter<"ExpenseAnalysis"> | Date | string
  }

  export type FinancialAnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: FinancialAnalysisWhereUniqueInput
    update: XOR<FinancialAnalysisUpdateWithoutUserInput, FinancialAnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<FinancialAnalysisCreateWithoutUserInput, FinancialAnalysisUncheckedCreateWithoutUserInput>
  }

  export type FinancialAnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: FinancialAnalysisWhereUniqueInput
    data: XOR<FinancialAnalysisUpdateWithoutUserInput, FinancialAnalysisUncheckedUpdateWithoutUserInput>
  }

  export type FinancialAnalysisUpdateManyWithWhereWithoutUserInput = {
    where: FinancialAnalysisScalarWhereInput
    data: XOR<FinancialAnalysisUpdateManyMutationInput, FinancialAnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type FinancialAnalysisScalarWhereInput = {
    AND?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
    OR?: FinancialAnalysisScalarWhereInput[]
    NOT?: FinancialAnalysisScalarWhereInput | FinancialAnalysisScalarWhereInput[]
    id?: StringFilter<"FinancialAnalysis"> | string
    userId?: StringFilter<"FinancialAnalysis"> | string
    month?: IntFilter<"FinancialAnalysis"> | number
    year?: IntFilter<"FinancialAnalysis"> | number
    data?: JsonFilter<"FinancialAnalysis">
    createdAt?: DateTimeFilter<"FinancialAnalysis"> | Date | string
  }

  export type FormsUpsertWithWhereUniqueWithoutUserInput = {
    where: FormsWhereUniqueInput
    update: XOR<FormsUpdateWithoutUserInput, FormsUncheckedUpdateWithoutUserInput>
    create: XOR<FormsCreateWithoutUserInput, FormsUncheckedCreateWithoutUserInput>
  }

  export type FormsUpdateWithWhereUniqueWithoutUserInput = {
    where: FormsWhereUniqueInput
    data: XOR<FormsUpdateWithoutUserInput, FormsUncheckedUpdateWithoutUserInput>
  }

  export type FormsUpdateManyWithWhereWithoutUserInput = {
    where: FormsScalarWhereInput
    data: XOR<FormsUpdateManyMutationInput, FormsUncheckedUpdateManyWithoutUserInput>
  }

  export type FormsScalarWhereInput = {
    AND?: FormsScalarWhereInput | FormsScalarWhereInput[]
    OR?: FormsScalarWhereInput[]
    NOT?: FormsScalarWhereInput | FormsScalarWhereInput[]
    id?: StringFilter<"Forms"> | string
    media_salarial?: StringFilter<"Forms"> | string
    idade?: StringFilter<"Forms"> | string
    quantidade_filhos?: StringFilter<"Forms"> | string
    dinheiro?: StringFilter<"Forms"> | string
    createdAt?: DateTimeFilter<"Forms"> | Date | string
    userId?: StringFilter<"Forms"> | string
  }

  export type GoalUpsertWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
    create: XOR<GoalCreateWithoutUserInput, GoalUncheckedCreateWithoutUserInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutUserInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutUserInput, GoalUncheckedUpdateWithoutUserInput>
  }

  export type GoalUpdateManyWithWhereWithoutUserInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutUserInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: StringFilter<"Goal"> | string
    title?: StringFilter<"Goal"> | string
    target?: FloatFilter<"Goal"> | number
    progress?: FloatFilter<"Goal"> | number
    status?: EnumGoalStatusFilter<"Goal"> | $Enums.GoalStatus
    userId?: StringFilter<"Goal"> | string
    createdAt?: DateTimeFilter<"Goal"> | Date | string
    category?: StringNullableFilter<"Goal"> | string | null
    imageUrl?: StringNullableFilter<"Goal"> | string | null
  }

  export type IncomeUpsertWithWhereUniqueWithoutUserInput = {
    where: IncomeWhereUniqueInput
    update: XOR<IncomeUpdateWithoutUserInput, IncomeUncheckedUpdateWithoutUserInput>
    create: XOR<IncomeCreateWithoutUserInput, IncomeUncheckedCreateWithoutUserInput>
  }

  export type IncomeUpdateWithWhereUniqueWithoutUserInput = {
    where: IncomeWhereUniqueInput
    data: XOR<IncomeUpdateWithoutUserInput, IncomeUncheckedUpdateWithoutUserInput>
  }

  export type IncomeUpdateManyWithWhereWithoutUserInput = {
    where: IncomeScalarWhereInput
    data: XOR<IncomeUpdateManyMutationInput, IncomeUncheckedUpdateManyWithoutUserInput>
  }

  export type IncomeScalarWhereInput = {
    AND?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
    OR?: IncomeScalarWhereInput[]
    NOT?: IncomeScalarWhereInput | IncomeScalarWhereInput[]
    id?: StringFilter<"Income"> | string
    date?: DateTimeFilter<"Income"> | Date | string
    userId?: StringFilter<"Income"> | string
    income?: FloatFilter<"Income"> | number
    extraincome?: FloatFilter<"Income"> | number
    otherincome?: FloatFilter<"Income"> | number
    month?: DateTimeFilter<"Income"> | Date | string
  }

  export type IncomeSummaryUpsertWithWhereUniqueWithoutUserInput = {
    where: IncomeSummaryWhereUniqueInput
    update: XOR<IncomeSummaryUpdateWithoutUserInput, IncomeSummaryUncheckedUpdateWithoutUserInput>
    create: XOR<IncomeSummaryCreateWithoutUserInput, IncomeSummaryUncheckedCreateWithoutUserInput>
  }

  export type IncomeSummaryUpdateWithWhereUniqueWithoutUserInput = {
    where: IncomeSummaryWhereUniqueInput
    data: XOR<IncomeSummaryUpdateWithoutUserInput, IncomeSummaryUncheckedUpdateWithoutUserInput>
  }

  export type IncomeSummaryUpdateManyWithWhereWithoutUserInput = {
    where: IncomeSummaryScalarWhereInput
    data: XOR<IncomeSummaryUpdateManyMutationInput, IncomeSummaryUncheckedUpdateManyWithoutUserInput>
  }

  export type IncomeSummaryScalarWhereInput = {
    AND?: IncomeSummaryScalarWhereInput | IncomeSummaryScalarWhereInput[]
    OR?: IncomeSummaryScalarWhereInput[]
    NOT?: IncomeSummaryScalarWhereInput | IncomeSummaryScalarWhereInput[]
    id?: StringFilter<"IncomeSummary"> | string
    userId?: StringFilter<"IncomeSummary"> | string
    total?: FloatFilter<"IncomeSummary"> | number
    impostoRenda?: FloatFilter<"IncomeSummary"> | number
    createdAt?: DateTimeFilter<"IncomeSummary"> | Date | string
    month?: DateTimeFilter<"IncomeSummary"> | Date | string
  }

  export type CategoryCreateWithoutExpensesInput = {
    id?: string
    name: string
    color?: string | null
  }

  export type CategoryUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    color?: string | null
  }

  export type CategoryCreateOrConnectWithoutExpensesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
  }

  export type UserCreateWithoutExpensesInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceCreateNestedOneWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisCreateNestedManyWithoutUserInput
    Forms?: FormsCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    Forms?: FormsUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type CategoryUpsertWithoutExpensesInput = {
    update: XOR<CategoryUpdateWithoutExpensesInput, CategoryUncheckedUpdateWithoutExpensesInput>
    create: XOR<CategoryCreateWithoutExpensesInput, CategoryUncheckedCreateWithoutExpensesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutExpensesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutExpensesInput, CategoryUncheckedUpdateWithoutExpensesInput>
  }

  export type CategoryUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateOneWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    Forms?: FormsUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    Forms?: FormsUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpenseCreateWithoutCategoryInput = {
    id?: string
    title: string
    amount: number
    date: Date | string
    isCredit?: boolean
    totalInstallments?: number | null
    currentInstallment?: number | null
    user: UserCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    amount: number
    date: Date | string
    isCredit?: boolean
    totalInstallments?: number | null
    currentInstallment?: number | null
    userId: string
  }

  export type ExpenseCreateOrConnectWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput>
  }

  export type ExpenseCreateManyCategoryInputEnvelope = {
    data: ExpenseCreateManyCategoryInput | ExpenseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutCategoryInput, ExpenseUncheckedUpdateWithoutCategoryInput>
    create: XOR<ExpenseCreateWithoutCategoryInput, ExpenseUncheckedCreateWithoutCategoryInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutCategoryInput, ExpenseUncheckedUpdateWithoutCategoryInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutCategoryInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceCreateNestedOneWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisCreateNestedManyWithoutUserInput
    Forms?: FormsCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    Forms?: FormsUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    Forms?: FormsUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    Forms?: FormsUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBalanceInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisCreateNestedManyWithoutUserInput
    Forms?: FormsCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    Forms?: FormsUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserUpsertWithoutBalanceInput = {
    update: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserUpdateWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    Forms?: FormsUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    Forms?: FormsUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIncomesInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceCreateNestedOneWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisCreateNestedManyWithoutUserInput
    Forms?: FormsCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncomesInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    Forms?: FormsUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncomesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
  }

  export type UserUpsertWithoutIncomesInput = {
    update: XOR<UserUpdateWithoutIncomesInput, UserUncheckedUpdateWithoutIncomesInput>
    create: XOR<UserCreateWithoutIncomesInput, UserUncheckedCreateWithoutIncomesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncomesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncomesInput, UserUncheckedUpdateWithoutIncomesInput>
  }

  export type UserUpdateWithoutIncomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    Forms?: FormsUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncomesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    Forms?: FormsUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIncomesummaryInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceCreateNestedOneWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisCreateNestedManyWithoutUserInput
    Forms?: FormsCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIncomesummaryInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    Forms?: FormsUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIncomesummaryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIncomesummaryInput, UserUncheckedCreateWithoutIncomesummaryInput>
  }

  export type UserUpsertWithoutIncomesummaryInput = {
    update: XOR<UserUpdateWithoutIncomesummaryInput, UserUncheckedUpdateWithoutIncomesummaryInput>
    create: XOR<UserCreateWithoutIncomesummaryInput, UserUncheckedCreateWithoutIncomesummaryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIncomesummaryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIncomesummaryInput, UserUncheckedUpdateWithoutIncomesummaryInput>
  }

  export type UserUpdateWithoutIncomesummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    Forms?: FormsUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIncomesummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    Forms?: FormsUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutExpensesAnalysisInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceCreateNestedOneWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisCreateNestedManyWithoutUserInput
    Forms?: FormsCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExpensesAnalysisInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    Forms?: FormsUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExpensesAnalysisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesAnalysisInput, UserUncheckedCreateWithoutExpensesAnalysisInput>
  }

  export type UserUpsertWithoutExpensesAnalysisInput = {
    update: XOR<UserUpdateWithoutExpensesAnalysisInput, UserUncheckedUpdateWithoutExpensesAnalysisInput>
    create: XOR<UserCreateWithoutExpensesAnalysisInput, UserUncheckedCreateWithoutExpensesAnalysisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesAnalysisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesAnalysisInput, UserUncheckedUpdateWithoutExpensesAnalysisInput>
  }

  export type UserUpdateWithoutExpensesAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    Forms?: FormsUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    Forms?: FormsUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFormsInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceCreateNestedOneWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFormsInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisUncheckedCreateNestedManyWithoutUserInput
    financialAnalysis?: FinancialAnalysisUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFormsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
  }

  export type UserUpsertWithoutFormsInput = {
    update: XOR<UserUpdateWithoutFormsInput, UserUncheckedUpdateWithoutFormsInput>
    create: XOR<UserCreateWithoutFormsInput, UserUncheckedCreateWithoutFormsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFormsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFormsInput, UserUncheckedUpdateWithoutFormsInput>
  }

  export type UserUpdateWithoutFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUncheckedUpdateManyWithoutUserNestedInput
    financialAnalysis?: FinancialAnalysisUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFinancialAnalysisInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceCreateNestedOneWithoutUserInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisCreateNestedManyWithoutUserInput
    Forms?: FormsCreateNestedManyWithoutUserInput
    goals?: GoalCreateNestedManyWithoutUserInput
    incomes?: IncomeCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFinancialAnalysisInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    balance?: BalanceUncheckedCreateNestedOneWithoutUserInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
    expensesAnalysis?: ExpenseAnalysisUncheckedCreateNestedManyWithoutUserInput
    Forms?: FormsUncheckedCreateNestedManyWithoutUserInput
    goals?: GoalUncheckedCreateNestedManyWithoutUserInput
    incomes?: IncomeUncheckedCreateNestedManyWithoutUserInput
    incomesummary?: IncomeSummaryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFinancialAnalysisInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinancialAnalysisInput, UserUncheckedCreateWithoutFinancialAnalysisInput>
  }

  export type UserUpsertWithoutFinancialAnalysisInput = {
    update: XOR<UserUpdateWithoutFinancialAnalysisInput, UserUncheckedUpdateWithoutFinancialAnalysisInput>
    create: XOR<UserCreateWithoutFinancialAnalysisInput, UserUncheckedCreateWithoutFinancialAnalysisInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinancialAnalysisInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinancialAnalysisInput, UserUncheckedUpdateWithoutFinancialAnalysisInput>
  }

  export type UserUpdateWithoutFinancialAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUpdateManyWithoutUserNestedInput
    Forms?: FormsUpdateManyWithoutUserNestedInput
    goals?: GoalUpdateManyWithoutUserNestedInput
    incomes?: IncomeUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFinancialAnalysisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateOneWithoutUserNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
    expensesAnalysis?: ExpenseAnalysisUncheckedUpdateManyWithoutUserNestedInput
    Forms?: FormsUncheckedUpdateManyWithoutUserNestedInput
    goals?: GoalUncheckedUpdateManyWithoutUserNestedInput
    incomes?: IncomeUncheckedUpdateManyWithoutUserNestedInput
    incomesummary?: IncomeSummaryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ExpenseCreateManyUserInput = {
    id?: string
    title: string
    amount: number
    date: Date | string
    isCredit?: boolean
    totalInstallments?: number | null
    currentInstallment?: number | null
    categoryId: string
  }

  export type ExpenseAnalysisCreateManyUserInput = {
    id?: string
    total: number
    categoriaMaiorGasto: number
    diferencamensal: number
    createdAt: Date | string
  }

  export type FinancialAnalysisCreateManyUserInput = {
    id?: string
    month: number
    year: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FormsCreateManyUserInput = {
    id?: string
    media_salarial: string
    idade: string
    quantidade_filhos: string
    dinheiro: string
    createdAt?: Date | string
  }

  export type GoalCreateManyUserInput = {
    id?: string
    title: string
    target: number
    progress?: number
    status?: $Enums.GoalStatus
    createdAt?: Date | string
    category?: string | null
    imageUrl?: string | null
  }

  export type IncomeCreateManyUserInput = {
    id?: string
    date: Date | string
    income: number
    extraincome: number
    otherincome: number
    month: Date | string
  }

  export type IncomeSummaryCreateManyUserInput = {
    id?: string
    total: number
    impostoRenda: number
    createdAt: Date | string
    month: Date | string
  }

  export type ExpenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    category?: CategoryUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseAnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    categoriaMaiorGasto?: FloatFieldUpdateOperationsInput | number
    diferencamensal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseAnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    categoriaMaiorGasto?: FloatFieldUpdateOperationsInput | number
    diferencamensal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseAnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    categoriaMaiorGasto?: FloatFieldUpdateOperationsInput | number
    diferencamensal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FinancialAnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_salarial?: StringFieldUpdateOperationsInput | string
    idade?: StringFieldUpdateOperationsInput | string
    quantidade_filhos?: StringFieldUpdateOperationsInput | string
    dinheiro?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_salarial?: StringFieldUpdateOperationsInput | string
    idade?: StringFieldUpdateOperationsInput | string
    quantidade_filhos?: StringFieldUpdateOperationsInput | string
    dinheiro?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_salarial?: StringFieldUpdateOperationsInput | string
    idade?: StringFieldUpdateOperationsInput | string
    quantidade_filhos?: StringFieldUpdateOperationsInput | string
    dinheiro?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GoalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    target?: FloatFieldUpdateOperationsInput | number
    progress?: FloatFieldUpdateOperationsInput | number
    status?: EnumGoalStatusFieldUpdateOperationsInput | $Enums.GoalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IncomeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    extraincome?: FloatFieldUpdateOperationsInput | number
    otherincome?: FloatFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    extraincome?: FloatFieldUpdateOperationsInput | number
    otherincome?: FloatFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    income?: FloatFieldUpdateOperationsInput | number
    extraincome?: FloatFieldUpdateOperationsInput | number
    otherincome?: FloatFieldUpdateOperationsInput | number
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeSummaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    impostoRenda?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeSummaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    impostoRenda?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IncomeSummaryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    impostoRenda?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    month?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyCategoryInput = {
    id?: string
    title: string
    amount: number
    date: Date | string
    isCredit?: boolean
    totalInstallments?: number | null
    currentInstallment?: number | null
    userId: string
  }

  export type ExpenseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ExpenseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isCredit?: BoolFieldUpdateOperationsInput | boolean
    totalInstallments?: NullableIntFieldUpdateOperationsInput | number | null
    currentInstallment?: NullableIntFieldUpdateOperationsInput | number | null
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}