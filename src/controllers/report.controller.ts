import {NextFunction, Request, Response} from "express";
import createReport from 'docx-templates';
import * as fs from 'fs';
import * as path from 'path';

export class ReportController {

    async SendTemplate (request: Request, response: Response) {
        //Загружаем шаблон
        const template = fs.readFileSync(path.join(__dirname, '../reports/test-template.docx'));

        const buffer = await createReport({
            template,
            cmdDelimiter: ['{{', '}}'],
            data: {
              name: 'John',
              surname: 'Appleseed',
            },
          });
        fs.writeFileSync( path.join(__dirname, '../storage/report.docx'), buffer);

        const file = fs.createReadStream(path.join(__dirname, '../storage/report.docx'));
        const stats = fs.statSync(path.join(__dirname, '../storage/report.docx'));

        response.setHeader('Content-Length', stats.size);
        response.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
        response.setHeader('Content-Disposition', 'attachment; filename=report.docx');

        file.pipe(response);
    }
}