import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
    tableName: 'avaliacao_respostas',
    timestamps: false
})
export default class ModelAvaliacaoResposta extends Model {

    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare avaliacao_id: bigint

    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare questao_id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.STRING(100),
    })
    declare resposta: string
}