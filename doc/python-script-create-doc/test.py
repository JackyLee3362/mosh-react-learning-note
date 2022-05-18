from pathlib import Path

path = Path("./doc")
if not path.exists():
    Path.mkdir(path)
else:
    print("file exists")

with open("hello", "a") as f:
    if not f:
        f.write("hello,world\n")
    else:
        print("don't write")

