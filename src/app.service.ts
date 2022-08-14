import { Injectable } from '@nestjs/common';
import {connection} from "./main"


@Injectable()
export class AppService {
  getHello(): string {
    return 'Books and Authors Application'
  }
  static mysqlConnectionExec(query: string) {
    return new Promise((res, rej) => {
      connection.query(query, function (error, results, fields) {
        if (error) throw error;
        res(results);
      });
    })
  }
}
