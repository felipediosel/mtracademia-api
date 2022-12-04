import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
    tableName: 'eventos_acessos',
    timestamps: false
})
export default class ModelEventoAcesso extends Model {

    @AutoIncrement
    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.DATE,
    })
    declare data: string

    @AllowNull(false)
    @Column({
        type: DataType.TIME,
    })
    declare hora: bigint

    @AllowNull(false)
    @Column({
        type: DataType.INTEGER,
    })
    declare pessoa_id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.STRING(100),
    })
    declare descricao: string
}