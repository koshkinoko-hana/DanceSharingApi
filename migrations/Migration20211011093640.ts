import { Migration } from '@mikro-orm/migrations';

export class Migration20211011093640 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `first_name` varchar(255) not null, `last_name` varchar(255) not null, `birth_date` datetime not null, `phone` varchar(255) null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `role` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `credential` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null) default character set utf8mb4 engine = InnoDB;');

    this.addSql('create table `account` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `login` varchar(255) not null, `role_id` int(11) unsigned not null, `credential_id` int(11) unsigned not null, `profile_id` int(11) unsigned not null) default character set utf8mb4 engine = InnoDB;');
    this.addSql('alter table `account` add index `account_role_id_index`(`role_id`);');
    this.addSql('alter table `account` add index `account_credential_id_index`(`credential_id`);');
    this.addSql('alter table `account` add unique `account_credential_id_unique`(`credential_id`);');
    this.addSql('alter table `account` add index `account_profile_id_index`(`profile_id`);');
    this.addSql('alter table `account` add unique `account_profile_id_unique`(`profile_id`);');

    this.addSql('alter table `account` add constraint `account_role_id_foreign` foreign key (`role_id`) references `role` (`id`) on update cascade;');
    this.addSql('alter table `account` add constraint `account_credential_id_foreign` foreign key (`credential_id`) references `credential` (`id`) on update cascade;');
    this.addSql('alter table `account` add constraint `account_profile_id_foreign` foreign key (`profile_id`) references `user` (`id`) on update cascade;');
  }

}
