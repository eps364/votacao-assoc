import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateAssembleia1589751149837
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'assembleias',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'pauta',
            type: 'varchar',
          },
          {
            name: 'descricao',
            type: 'varchar',
          },
          {
            name: 'pauta_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'assembleias',
      new TableForeignKey({
        name: 'pk_assembleia_pauta',
        columnNames: ['pauta_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pautas',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropForeignKey('pk_voto_usuario', 'voto');
    await queryRunner.dropTable('assembleias');
  }
}
