import unittest

from beginner.code_1000.code_1000 import hello

class TestHello(unittest.TestCase):
    def test_hello(self):
        assert hello() == "Hello World!"

if __name__ == "__main__":
    unittest.main()
