import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateSessao1589751129978 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sessao',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'inicio',
            type: 'timestamp',
          },
          {
            name: 'fim',
            type: 'timestamp',
          },
          {
            name: 'voto_id',
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
      'sessao',
      new TableForeignKey({
        name: 'pk_sessao_voto',
        columnNames: ['voto_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'votos',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.dropForeignKey('pk_voto_usuario', 'voto');
    await queryRunner.dropTable('sessao');
  }
}
