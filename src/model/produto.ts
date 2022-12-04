import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
    tableName: 'produtos',
    timestamps: false
})
export default class ModelProduto extends Model {

    @AutoIncrement
    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.STRING(20),
    })
    declare codigo: string

    @AllowNull(false)
    @Column({
        type: DataType.STRING(50),
    })
    declare descricao: string

    @AllowNull(false)
    @Column({
        type: DataType.NUMBER,
    })
    declare valor_venda: number
}