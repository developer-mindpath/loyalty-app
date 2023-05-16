import { MigrationInterface, QueryRunner } from "typeorm";

export class Refactor1684215613949 implements MigrationInterface {
    name = 'Refactor1684215613949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`referral\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`version\` int NOT NULL DEFAULT '1', \`deleted\` tinyint NOT NULL DEFAULT 0, \`enable\` tinyint NOT NULL, \`points_amount\` decimal NOT NULL, \`points_limit\` decimal NOT NULL DEFAULT '0', \`selected_option\` varchar(255) NOT NULL DEFAULT '', \`review_app\` varchar(255) NOT NULL, \`limit_count_enabled\` tinyint NOT NULL, UNIQUE INDEX \`IDX_a2d3e935a6591168066defec5a\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`stores\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`version\` int NOT NULL DEFAULT '1', \`deleted\` tinyint NOT NULL DEFAULT 0, \`name\` varchar(255) NOT NULL, \`store\` varchar(255) NOT NULL, \`token\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_7aa6e7d71fa7acdd7ca43d7c9c\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`createAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`version\` int NOT NULL DEFAULT '1', \`deleted\` tinyint NOT NULL DEFAULT 0, \`userName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_a3ffb1c0c8416b9fc6f907b743\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_a3ffb1c0c8416b9fc6f907b743\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_7aa6e7d71fa7acdd7ca43d7c9c\` ON \`stores\``);
        await queryRunner.query(`DROP TABLE \`stores\``);
        await queryRunner.query(`DROP INDEX \`IDX_a2d3e935a6591168066defec5a\` ON \`referral\``);
        await queryRunner.query(`DROP TABLE \`referral\``);
    }

}
