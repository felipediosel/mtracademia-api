import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
    tableName: 'servicos',
    timestamps: false
})
export default class ModelServico extends Model {

    @AutoIncrement
    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.STRING(100),
    })
    declare descricao: string

    @AllowNull(false)
    @Column({
        type: DataType.NUMBER,
    })
    declare valor: number
}