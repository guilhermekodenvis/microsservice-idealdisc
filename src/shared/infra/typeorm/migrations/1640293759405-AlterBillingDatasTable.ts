import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterBillingDatasTable1640293759405 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "billing_datas",
      "street",
      new TableColumn({
        name: "street",
        type: "varchar",
        isNullable: true,
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "number",
      new TableColumn({
        name: "number",
        type: "varchar",
        isNullable: true,
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "neighboor",
      new TableColumn({
        name: "neighboor",
        type: "varchar",
        isNullable: true,
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "city",
      new TableColumn({
        name: "city",
        type: "varchar",
        isNullable: true,
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "state",
      new TableColumn({
        name: "state",
        type: "varchar",
        isNullable: true,
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "postal_code",
      new TableColumn({
        name: "postal_code",
        type: "varchar",
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "billing_datas",
      "street",
      new TableColumn({
        name: "street",
        type: "varchar",
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "number",
      new TableColumn({
        name: "number",
        type: "varchar",
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "neighboor",
      new TableColumn({
        name: "neighboor",
        type: "varchar",
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "city",
      new TableColumn({
        name: "city",
        type: "varchar",
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "state",
      new TableColumn({
        name: "state",
        type: "varchar",
      }),
    );
    await queryRunner.changeColumn(
      "billing_datas",
      "postal_code",
      new TableColumn({
        name: "postal_code",
        type: "varchar",
      }),
    );
  }
}
