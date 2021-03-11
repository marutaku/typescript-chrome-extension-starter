function helloWorld(): void {
  console.log('Hello, world');
  console.log(returnString('TEST'));
}

function returnString(text: string): string {
  return text;
}

helloWorld();
