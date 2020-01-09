import { RestaurantsModule } from './general/restaurants/restaurants.module';
import { CitiesModule } from './general/cities/cities.module';
import { UsersModule } from './system/security/users/users.module';
import { AuthModule } from './system/security/auth/auth.module';
import { mongooseOptions } from './../shared/options/mongoose.options';
import { constants } from './../shared/constants/constants';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

// import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ElasticSearchModule } from './system/elastic-search/elastic-search.module';

import { plugin } from 'mongoose';
import { CountriesModule } from './general/countries/countries.module';

// Inject handler and the incrementor of document version "__v"
import * as mongooseUpdateDocumentVersion from 'mongoose-update-document-version';
plugin(mongooseUpdateDocumentVersion);

// Inject create date and update date in all mongoose schemas
import * as timestamps from 'mongoose-timestamp';
plugin(timestamps);

// Inject soft-delete in all mongoose schemas
import * as mongooseDelete from 'mongoose-delete';
plugin(mongooseDelete, { deletedAt: true });

@Module({
  imports: [
    /* Mongoose DB connection Init */
    MongooseModule.forRoot(
      process.env.DB_URI.replace('{{dbName}}', process.env.DATABASE_NAME),
      mongooseOptions,
    ),

    /* Elastic-search */
    ElasticSearchModule,
    /* ElasticsearchModule.register({
      node: 'http://127.0.0.1:9200',
    }), */

    /* Serve static files at Public [eg: index.html, uploads] */
    ServeStaticModule.forRoot({
      rootPath: join('.', 'public'),
    }),

    /* App Modules */
    AuthModule,
    UsersModule,
    CitiesModule,
    RestaurantsModule,
    CountriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
