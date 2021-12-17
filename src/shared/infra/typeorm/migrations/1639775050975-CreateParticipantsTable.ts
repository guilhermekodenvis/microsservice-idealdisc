import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateParticipantsTable1639775050975 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "participants",
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
            name: "cpf",
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
            name: "cell",
            type: "varchar",
          },
          {
            name: "office",
            type: "varchar",
          },
          {
            name: "instagram",
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
    await queryRunner.dropTable("participants");
  }
}
