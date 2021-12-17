import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMasterUserDatasTable1639775087438 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "master_user_datas",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "office",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
          },
          {
            name: "tel",
            type: "varchar",
          },
          {
            name: "mobile",
            type: "varchar",
          },
          {
            name: "subscription_id",
            type: "uuid",
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("master_user_datas");
  }
}
