import { Table, Column, Model, DataType, AutoIncrement, AllowNull, PrimaryKey } from 'sequelize-typescript'

@Table({
    tableName: 'pessoas',
    timestamps: false
})
export default class ModelPessoa extends Model {

    @AutoIncrement
    @AllowNull(false)
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
    })
    declare id: bigint

    @AllowNull(false)
    @Column({
        type: DataType.STRING(200),
    })
    declare nome: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(10),
    })
    declare rg: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(15),
    })
    declare cpf: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(20),
    })
    declare celular: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(200),
    })
    declare email: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(200),
    })
    declare endereco: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(50),
    })
    declare bairro: string

    @AllowNull(true)
    @Column({
        type: DataType.STRING(50),
    })
    declare cidade: string
}