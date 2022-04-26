from collections import deque
import sys; rl = sys.stdin.readline

M, N = map(int, rl().split())
box = [list(map(int, rl().split())) for _ in range(N)]
tmtIdx = []
dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

for i in range(N):
    for j in range(M):
        if box[i][j] == 1:
            tmtIdx.append([i, j, 1])

def bfs():
    max = 0
    q = deque(tmtIdx)

    while(q):
        x, y, n = q.popleft()
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]
            if 0 <= nx < N and 0 <= ny < M:
                if box[nx][ny] == 0:
                    box[nx][ny] = n + 1
                    max = n
                    q.append([nx, ny, n + 1])
    return max

max = bfs()
for i in range(N):
    for j in range(M):
        if box[i][j] == 0:
            print(-1)
            exit(0)

print(max)