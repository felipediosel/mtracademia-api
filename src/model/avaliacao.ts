import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
    tableName: 'avaliacao',
    timestamps: false
})
export default class ModelAvaliacao extends Model {

    @AutoIncrement
    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    declare pessoa_id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.DATE,
    })
    declare data: string
}