class ApiResponse {
  constructor(code, message, data) {
    this.code = code;
    this.message = message;
    this.data = this.isError() ? data : data;
  }

  send(res) {
    res.status(this.code).json(this);
  }

  isError() {
    return this.code < 200 || this.code >= 300;
  }
}

module.exports = ApiResponse;
