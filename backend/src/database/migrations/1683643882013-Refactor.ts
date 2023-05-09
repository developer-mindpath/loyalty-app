import { MigrationInterface, QueryRunner } from "typeorm";

export class Refactor1683643882013 implements MigrationInterface {
    name = 'Refactor1683643882013'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`referral\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`version\` int NOT NULL DEFAULT '1', \`deleted\` tinyint NOT NULL DEFAULT 0, \`enable\` tinyint NOT NULL, \`points_amount\` decimal NOT NULL, \`points_limit\` decimal NOT NULL DEFAULT '0', \`selected_option\` varchar(255) NOT NULL DEFAULT '', \`review_app\` varchar(255) NOT NULL, \`limit_count_enabled\` tinyint NOT NULL, UNIQUE INDEX \`IDX_a2d3e935a6591168066defec5a\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_a2d3e935a6591168066defec5a\` ON \`referral\``);
        await queryRunner.query(`DROP TABLE \`referral\``);
    }

}
