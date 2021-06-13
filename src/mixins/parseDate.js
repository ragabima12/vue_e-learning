import Moment from 'moment'

export default {
  methods: {
    parseDate(datetime) {
      return Moment(datetime).format("DD MMMM YYYY H:m");
    }
  }
}