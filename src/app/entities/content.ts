export class Content {
  private readonly content: string;

  get value(): string {
    return this.content;
  }

  private validateContentLength(content: string): boolean {
    return content.length >= 5 && content.length <= 100;
  }

  constructor(content: string) {
    const isValidContentlength = this.validateContentLength(content);

    if (!isValidContentlength) {
      throw new Error('Invalid content length');
    }
    this.content = content;
  }
}
