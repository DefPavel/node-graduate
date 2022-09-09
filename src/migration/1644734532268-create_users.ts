import { MigrationInterface, QueryRunner, Table, TableIndex, TableColumn, TableForeignKey} from "typeorm";

export class createUsers1644734532268 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    generationStrategy : "increment"

                },
                {
                    name: "username",
                    type: "character varying",
                    length: '100',
                },
                {
                    name: "firstname",
                    type: "character varying",
                    length: '100',
                },
                {
                    name: "lastname",
                    type: "character varying",
                    length: "100",
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
