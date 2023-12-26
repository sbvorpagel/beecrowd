fun main(args: Array<String>) {
    val numberOne = readLine()?.toInt()
    val numberTwo = readLine()?.toInt()

    if (numberOne != null && numberTwo != null) {
        println("X = ${numberOne + numberTwo}")
    }
}
