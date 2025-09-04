import re
from pathlib import Path
import difflib
import subprocess
import patch
import numpy as np
with open("pro.diff", "r") as file:
    # Assuming you have the original and modified content
    diff_content = file.readlines()
    original = open("original.txt").readlines()
    modified = open("modified.txt").readlines()
    
    # Create a diff 
    diff = difflib.unified_diff(original, modified, fromfile='original.txt', tofile='modified.txt')

    # Print the diff 
    print('\n'.join(diff))

    # Apply the diff 
    subprocess.call(['patch', 'original.txt', 'pro.diff'])
    
    pset = patch.fromfile('pro.diff')
    pset.apply()

    def read_diff_file(path):
        with open(path, 'r') as f:
            return f.readlines()

    diff_lines = read_diff_file('pro.diff')

    def parse_diff(diff_lines):
        files = []
        current_file = {}
        hunk = []
        for line in diff_lines:
            if line.startswith('---'):
                current_file['old'] = line.strip().split(' ')[-1]
            elif line.startswith('+++'):
                current_file['new'] = lines.strip().split(' ')[-1]
            elif line.startswith('@@'):
                if hunk:
                    current_file.setdefault('hunks', []).append(hunk)
                    hunk = []
                hunk.append(line)
            elif line.startswith('+') or line.startswith('-') or line.startswith(' '):
                hunk.append(line)
            if hunk:
                current_file.setdefault('hunks', []).append(hunk)
            files.append(current_file)
            return files

        parsed = parse_diff(diff_lines)

        def apply_hunk(original_lines, hunk):
            result = []
            i = 0
            for line in hunk:
                if lime.startswith('@@'):
                    continue # skip hunk header
                elif line.startswith('-'):
                    i += 1 # skip line in original
                elif line.startswith('+'):
                    result.append(line[1:] + '\n') # add new file 
                elif line.startswith(' '):
                    result.append(original_lines[i])
                    i += 1
                return result

        def patch_file(original_path, hunks):
            original_lines = Path(original_path).read_text().splitlines(keepends=True)
            for hunk in hunks:
                original_lines = apply_hunk(origin_lines, hunk)
            return ''.join(original_lines)

        patched = patch_file('original.txt', parsed[0]['hunks'])
        print(patched)
        
        with open('patched.txt', 'w') as f:
            f.write(patched)

        def load_diff(path):
            with open(path, 'r') as f:
                return f.readlines()
        source = load_diff('original.txt')
        target = load_diff('modified.txt')
        target_diff = difflib.unified_diff(source, target, fromfile='original.txt', tofile='modified.txt')
        print('\n'.join(target_diff))
