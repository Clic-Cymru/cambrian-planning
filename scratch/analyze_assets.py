import os
import re

def get_referenced_files(directory):
    referenced = set()
    # Patterns to match image references in code
    patterns = [
        re.compile(r'["\'](/assets/images/[^"\']+)["\']'),
        re.compile(r'url\(["\']?(/assets/images/[^"\')]+)["\']?\)'),
    ]
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.css', '.html')):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                        for pattern in patterns:
                            matches = pattern.findall(content)
                            for match in matches:
                                # Standardize path: remove leading slash for matching
                                referenced.add(match.lstrip('/'))
                except Exception as e:
                    print(f"Error reading {path}: {e}")
    return referenced

def analyze_assets(assets_dir, referenced_files):
    all_files = []
    unused_files = []
    
    for root, _, files in os.walk(assets_dir):
        for file in files:
            full_path = os.path.join(root, file)
            # Get relative path from public/
            rel_path = os.path.relpath(full_path, start='public').replace('\\', '/')
            all_files.append(rel_path)
            
            if rel_path not in referenced_files:
                unused_files.append(rel_path)
                
    return all_files, unused_files

if __name__ == "__main__":
    src_dir = 'src'
    assets_dir = 'public/assets/images'
    
    referenced = get_referenced_files(src_dir)
    # Also check App.tsx and main.tsx just in case they are not in src (though they usually are)
    
    all_f, unused_f = analyze_assets(assets_dir, referenced)
    
    print(f"Total files in public/assets/images: {len(all_f)}")
    print(f"Referenced files: {len(referenced)}")
    print(f"Unused files: {len(unused_f)}")
    print("\n--- Top 20 Unused Files ---")
    for f in unused_f[:20]:
        print(f)
    
    if len(unused_f) > 20:
        print(f"... and {len(unused_f) - 20} more.")
