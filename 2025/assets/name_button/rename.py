import os

# use current folder
folder_path = "."

for filename in os.listdir(folder_path):
    # only process image files
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        new_name = filename.lower().replace(' ', '-').replace('_', '-')
        
        old_path = os.path.join(folder_path, filename)
        new_path = os.path.join(folder_path, new_name)
        
        if old_path != new_path:
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} → {new_name}")

print("✅ Done renaming files.")
