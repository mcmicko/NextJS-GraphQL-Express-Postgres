import { Migration } from '@mikro-orm/migrations';

export class Migration20210127192722 extends Migration {

  async up(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
