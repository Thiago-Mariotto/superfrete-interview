interface IUseCases<Input, Output> {
  execute(data?: Input): Promise<Output>;
}

export default IUseCases;