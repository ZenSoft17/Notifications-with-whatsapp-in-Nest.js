import { Injectable } from '@nestjs/common'
import * as moment from 'moment-timezone'

@Injectable()
export class DateService {
	getMongoDate(): Date {
		return moment.tz('America/Bogota').toDate()
	}
}
