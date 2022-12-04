import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
    tableName: 'contas_receber',
    timestamps: false
})
export default class ModelContasReceber extends Model {

    @AutoIncrement
    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare id: bigint

    @AllowNull(true)
    @Column({
        type: DataType.INTEGER,
    })
    declare servico_id: bigint

    @AllowNull(true)
    @Column({
        type: DataType.INTEGER,
    })
    declare produto_id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    declare pessoa_id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.DATE,
    })
    declare vencimento: string

    @AllowNull(false)
    @Column({
        type: DataType.NUMBER,
    })
    declare valor: number
}