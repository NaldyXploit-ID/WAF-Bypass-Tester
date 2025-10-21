#!/usr/bin/env python3
import argparse, base64, hashlib
def encode_b64(s): return base64.b64encode(s.encode()).decode()
def hash_md5(s): return hashlib.md5(s.encode()).hexdigest()
def main():
  p=argparse.ArgumentParser(); p.add_argument("action", choices=["encode","md5"]); p.add_argument("data"); args=p.parse_args()
  print(encode_b64(args.data) if args.action=="encode" else hash_md5(args.data))
if __name__=="__main__": main()
