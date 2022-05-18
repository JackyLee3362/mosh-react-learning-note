# !/usr/bin/python
# -*- coding: utf-8 -*-
# -------------------------------------
# @Time    : ${DATE} ${TIME}
# @Author  : Jackylee
# @File    : ${NAME}.py
# -------------------------------------
""" 
该文档主要是生成笔记大纲
最后生成笔记大纲
！！！注意，不要在笔记完成后运行此脚本，有可能会覆盖原笔记
"""

from urllib import response
from xmlrpc.client import boolean
import requests
from pathlib import Path
import json
import io
import sys
import re

def _send_request_and_save(url:str,filename:str) -> None:
  """
  如果filename文件不存在，发送url请求，并保存文件
  如果存在则直接返回
  """
  if Path(filename).exists: 
    print("文件已存在，不发送请求")
    return
  print("正在发送请求request...")
  res = requests.get(url)
  res.encoding = "utf-8"
  with open(filename, "w", encoding="utf-8") as f:
    f.write(res.text)
  
def _get_data_list(filename:str) -> json:
  """
  返回json格式的数据
  """ 
  with open(filename, "rt", encoding="utf-8") as f:
    data = f.read()
    return json.loads(data)

def _print_dir_and_file_name(jsondata:json, basedoc: str):
  """
  匹配字符串，并生成文件夹和文件
  """
  path = f"./{basedoc}"
  if not Path(path).exists():
    print(f"目录文件不存在，创建目录文件夹{basedoc}...")
    Path(path).mkdir()
  if Path(f"./{basedoc}/Chapter1/README.md").exists():
    print("笔记已经存在，程序结束")
    return 
  p = re.compile(r".*CH(\d{1,2})\s.*(\d.*)")
  for i in jsondata['data']:
      m = p.match(i['part'])
      # print(m.group(1,2))
      if m:
        chapter = m.group(1)
        chapter_name = m.group(2)
        chapter_path = Path(f"./{basedoc}/Chapter{chapter}")
        if not (chapter_path).exists():
          Path.mkdir(chapter_path)
        else:
          # print(f"{chapter_path} file exists")
          pass
        with open(f"./{basedoc}/Chapter{chapter}/README.md", "a") as f:
          f.write(f"## {chapter}.{chapter_name} \n\n\n")
        
def run():
  # config
  filename = "script/res.json"
  url = "https://api.bilibili.com/x/player/pagelist?bvid=BV1Sb411P79t&jsonp=jsonp"
  
  # logic code
  print("开始运行脚本...")
  _send_request_and_save(url, filename)
  titles = _get_data_list(filename)
  _print_dir_and_file_name(titles, "doc")
  print("结束运行脚本...")

if __name__ == "__main__":
  sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
  run()

  
  
  
