export function helloWorld(): string {
    return "Hello World!"
}

if (require.main === module) {
    console.log(helloWorld());
}