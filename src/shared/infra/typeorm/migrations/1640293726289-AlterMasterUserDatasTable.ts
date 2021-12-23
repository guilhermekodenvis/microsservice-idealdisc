import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterMasterUserDatasTable1640293726289 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "master_user_datas",
      "name",
      new TableColumn({
        name: "name",
        type: "varchar",
        isNullable: true,
      }),
    );
    await queryRunner.changeColumn(
      "master_user_datas",
      "office",
      new TableColumn({
        name: "office",
        type: "varchar",
        isNullable: true,
      }),
    );
    await queryRunner.changeColumn(
      "master_user_datas",
      "email",
      new TableColumn({
        name: "email",
        type: "varchar",
        isNullable: true,
      }),
    );
    await queryRunner.changeColumn(
      "master_user_datas",
      "tel",
      new TableColumn({
        name: "tel",
        type: "varchar",
        isNullable: true,
      }),
    );
    await queryRunner.changeColumn(
      "master_user_datas",
      "mobile",
      new TableColumn({
        name: "mobile",
        type: "varchar",
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      "master_user_datas",
      "name",
      new TableColumn({
        name: "name",
        type: "varchar",
      }),
    );
    await queryRunner.changeColumn(
      "master_user_datas",
      "office",
      new TableColumn({
        name: "office",
        type: "varchar",
      }),
    );
    await queryRunner.changeColumn(
      "master_user_datas",
      "email",
      new TableColumn({
        name: "email",
        type: "varchar",
      }),
    );
    await queryRunner.changeColumn(
      "master_user_datas",
      "tel",
      new TableColumn({
        name: "tel",
        type: "varchar",
      }),
    );
    await queryRunner.changeColumn(
      "master_user_datas",
      "mobile",
      new TableColumn({
        name: "mobile",
        type: "varchar",
      }),
    );
  }
}
