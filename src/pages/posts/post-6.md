---
layout: ../../layouts/MarkdownPostLayout.astro
title: Git Reset
author: Astro Learner
description: "Git Hard Reset"
image:
    url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Github_logo_svg.svg"
    alt: "The Astro logo on a dark background with a purple gradient arc."
pubDate: 2022-07-08
tags: ["Git, reset, step back"]

---




To go back in time in your Git history, you can use **Git's reset** or **revert** commands to undo changes and return to a previous state in your repository. Here's how to do it step by step:

---

### 1. **View Your Commit History**
Before you can go back to a previous state, you need to identify the commit you want to return to.

Run the following command to view your commit history:
```bash
git log --oneline
```

This will display a list of recent commits, with each commit having a unique **commit hash**. For example:
```
abc1234 Commit message for the most recent commit
def5678 Previous commit message
ghi9012 Older commit message
```

The **commit hash** is the short string (e.g., `abc1234`) that uniquely identifies each commit.

### 2. **Reset to a Specific Commit**
Once you've identified the commit you want to go back to, you can use `git reset` to undo any changes since that commit.

#### **Hard Reset (Discards Local Changes)**:
If you want to completely discard your local changes and reset your project to the state it was in at a specific commit (including changes that have not been committed), use the **hard reset**:

```bash
git reset --hard <commit_hash>
```

For example, if the commit you want to go back to has the hash `def5678`, you would run:
```bash
git reset --hard def5678
```

**Important**: This will reset your local working directory to the exact state of that commit, and **all local changes will be lost**. Use this carefully.

#### **Soft Reset (Keeps Local Changes)**:
If you want to go back to a previous commit but keep your changes in the working directory (so you can commit them again), you can use the **soft reset**:

```bash
git reset --soft <commit_hash>
```

This will move the `HEAD` pointer back to the given commit but **retain your local changes** so you can re-commit them.

### 3. **Push the Changes to GitHub**
After resetting your local repository, you need to **push the changes to GitHub** to update the remote repository. Since you are rewriting history, you'll need to use a **force push**.

If you've performed a **hard reset**, run:
```bash
git push origin main --force
```

This will force push the changes to the `main` branch (or whatever branch you're working on) on GitHub.

**Warning**: Using `--force` will overwrite the history on GitHub, so use it with caution, especially if others are working on the same branch.

### 4. **Check Your Repository on GitHub**
After pushing the reset changes, go to GitHub and verify that your repository is now in the desired state.

---

### 5. **Alternative: Revert a Specific Commit**
If you don't want to reset the entire history but just undo a **specific commit**, you can use `git revert`. This creates a new commit that undoes the changes from a specific commit without modifying the history.

To revert a commit:
1. Identify the commit hash (`git log --oneline`).
2. Run:
   ```bash
   git revert <commit_hash>
   ```

For example:
```bash
git revert def5678
```

This will create a new commit that reverses the changes from the `def5678` commit.

Then push the changes to GitHub:
```bash
git push origin main
```

---

### Summary of Commands:
1. **View Commit History**:
   ```bash
   git log --oneline
   ```

2. **Hard Reset to a Commit** (discard changes):
   ```bash
   git reset --hard <commit_hash>
   ```

3. **Soft Reset to a Commit** (keep changes):
   ```bash
   git reset --soft <commit_hash>
   ```

4. **Force Push to GitHub** (after resetting):
   ```bash
   git push origin main --force
   ```

5. **Revert a Specific Commit** (without resetting history):
   ```bash
   git revert <commit_hash>
   ```

6. **Push the Reverted Commit**:
   ```bash
   git push origin main
   ```

---

To step back to commit `22d4e0e`, you can use `git reset` to move the `HEAD` pointer back to that commit. Here’s how you can do it:

### Steps to Step Back to Commit `22d4e0e`

1. **Ensure You Have No Uncommitted Changes**:
   - First, check for any uncommitted changes in your working directory:
     ```bash
     git status
     ```

   - If you have uncommitted changes and you don't need them, you can discard them:
     ```bash
     git restore .        # Discards changes in tracked files
     git clean -fd        # Removes untracked files/directories
     ```

2. **Reset to Commit `22d4e0e`**:
   - Use the `git reset` command to move the `HEAD` pointer to the commit `22d4e0e`. If you want to **discard changes** and match the state of your local repository to that commit, use the **hard reset**:
     ```bash
     git reset --hard 22d4e0e
     ```

   - This command will:
     - Move the `HEAD` to commit `22d4e0e`.
     - Reset your working directory and staging area to match this commit.
     - **Discard any local changes** you’ve made since that commit.

3. **Force Push the Reset to GitHub** (if necessary):
   - After resetting your local repository, you need to push the changes to GitHub. Since you're rewriting history, you'll need to use a **force push**:
     ```bash
     git push origin master --force
     ```

   - This will overwrite the history on GitHub with the new state of your local repository.

### **Important Note:**
- A **hard reset** will discard any uncommitted changes, so make sure you really want to lose those changes before running `git reset --hard`.
- If you're working with a team, be careful with **force pushing** (`--force`) as it can overwrite changes that others might have made.

---

### If You Want to Keep Your Changes Locally (Optional):
If you want to keep your local changes but go back to commit `22d4e0e`, you can use a **soft reset**:
```bash
git reset --soft 22d4e0e
```
This will:
- Move the `HEAD` to `22d4e0e`.
- Keep your changes in the staging area so you can recommit them.

