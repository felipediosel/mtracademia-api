import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
    tableName: 'avaliacao_questoes',
    timestamps: false
})
export default class ModelAvaliacaoQuestao extends Model {

    @AutoIncrement
    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.STRING(150),
    })
    declare descricao: string

    @AllowNull(false)
    @Column({
        type: DataType.SMALLINT,
    })
    declare ordem: bigint
}