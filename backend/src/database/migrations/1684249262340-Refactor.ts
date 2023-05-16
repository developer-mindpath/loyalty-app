import { MigrationInterface, QueryRunner } from "typeorm";

export class Refactor1684249262340 implements MigrationInterface {
    name = 'Refactor1684249262340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`referral\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`enable\` tinyint NOT NULL, \`points_amount\` decimal NOT NULL, \`points_limit\` decimal NOT NULL DEFAULT '0', \`selected_option\` varchar(255) NOT NULL DEFAULT '', \`review_app\` varchar(255) NOT NULL, \`limit_count_enabled\` tinyint NOT NULL, UNIQUE INDEX \`IDX_a2d3e935a6591168066defec5a\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`stores\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`store\` varchar(255) NOT NULL, \`token\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_7aa6e7d71fa7acdd7ca43d7c9c\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_a3ffb1c0c8416b9fc6f907b743\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin_activity\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`type_id\` int NOT NULL, \`admin_user_id\` int NOT NULL, \`activity_status\` varchar(255) NOT NULL, \`activity_date\` datetime NOT NULL, \`status\` varchar(255) NOT NULL, \`created_by\` int NOT NULL, \`updated_by\` int NOT NULL, UNIQUE INDEX \`IDX_9a163d0f6bf432cb24674e5708\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`admin_activity_type\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`is_active\` tinyint NOT NULL, \`status\` varchar(255) NOT NULL, \`created_by\` int NOT NULL, \`updated_by\` int NOT NULL, UNIQUE INDEX \`IDX_717d493cc721933a55ebb50ba3\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`point_action\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`action_key\` varchar(255) NOT NULL, \`action_key_display_text\` varchar(255) NOT NULL, \`action_visible_order\` int NOT NULL, \`action_icon\` varchar(255) NOT NULL, \`action_description\` varchar(255) NOT NULL, \`is_action_enabled\` tinyint NOT NULL, \`status\` varchar(255) NOT NULL, \`user_id\` int NOT NULL, \`admin_ref\` int NOT NULL, \`created_by\` int NOT NULL, \`updated_by\` int NOT NULL, UNIQUE INDEX \`IDX_169d9a7500b2ddd5be7b61a3e4\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`point_action_details\` (\`key\` int NOT NULL AUTO_INCREMENT, \`id\` varchar(36) NOT NULL, \`create_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`update_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`point_action_id\` int NOT NULL, \`app_id\` int NOT NULL, \`points_amounts\` float NOT NULL, \`limit_count\` int NOT NULL, \`limit_count_type\` varchar(255) NOT NULL, \`url_to_share\` varchar(255) NOT NULL, \`earning_method\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`limit_count_enabled\` tinyint NOT NULL, \`admin_ref\` int NOT NULL, \`created_by\` int NOT NULL, \`updated_by\` int NOT NULL, UNIQUE INDEX \`IDX_6288f464118b1ac85e4621aa40\` (\`id\`), PRIMARY KEY (\`key\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_6288f464118b1ac85e4621aa40\` ON \`point_action_details\``);
        await queryRunner.query(`DROP TABLE \`point_action_details\``);
        await queryRunner.query(`DROP INDEX \`IDX_169d9a7500b2ddd5be7b61a3e4\` ON \`point_action\``);
        await queryRunner.query(`DROP TABLE \`point_action\``);
        await queryRunner.query(`DROP INDEX \`IDX_717d493cc721933a55ebb50ba3\` ON \`admin_activity_type\``);
        await queryRunner.query(`DROP TABLE \`admin_activity_type\``);
        await queryRunner.query(`DROP INDEX \`IDX_9a163d0f6bf432cb24674e5708\` ON \`admin_activity\``);
        await queryRunner.query(`DROP TABLE \`admin_activity\``);
        await queryRunner.query(`DROP INDEX \`IDX_a3ffb1c0c8416b9fc6f907b743\` ON \`users\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_7aa6e7d71fa7acdd7ca43d7c9c\` ON \`stores\``);
        await queryRunner.query(`DROP TABLE \`stores\``);
        await queryRunner.query(`DROP INDEX \`IDX_a2d3e935a6591168066defec5a\` ON \`referral\``);
        await queryRunner.query(`DROP TABLE \`referral\``);
    }

}
