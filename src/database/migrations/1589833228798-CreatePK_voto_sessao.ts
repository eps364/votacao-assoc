import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreatePKVotoSessao1589833228798
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createForeignKey(
      'votos',
      new TableForeignKey({
        name: 'fk_voto_usuario',
        columnNames: ['usuario_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'usuarios',
      }),
    );

    await queryRunner.createForeignKey(
      'votos',
      new TableForeignKey({
        name: 'fk_voto_sessao',
        columnNames: ['sessao_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'sessao',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('votos', 'fk_voto_usuario');
    await queryRunner.dropForeignKey('votos', 'fk_voto_sessao');
  }
}
