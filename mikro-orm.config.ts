import { ReflectMetadataProvider } from 'mikro-orm';
import config from './src/config/mikro-orm';
import * as entities from './src/entities';

export default {
  ...config(),
    entities: Object.values(entities),
    migrations: {
        tableName: 'migrations', // name of database table with log of executed transactions
        path: './migrations', // path to the folder with migrations
        transactional: true, // wrap each migration in a transaction
        disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
        allOrNothing: true, // wrap all migrations in master transaction
    },
    tsNode: false,
    metadataProvider: ReflectMetadataProvider,
    cache: {
        enabled: false,
    },
};
