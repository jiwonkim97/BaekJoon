import sys; rl = sys.stdin.readline

N = int(rl())
RGB = [list(map(int, rl().split())) for _ in range(N)]

# 참고함
for i in range(1, N):
  RGB[i][0] = RGB[i][0] + min(RGB[i-1][1], RGB[i-1][2])
  RGB[i][1] = RGB[i][1] + min(RGB[i-1][2], RGB[i-1][0])
  RGB[i][2] = RGB[i][2] + min(RGB[i-1][0], RGB[i-1][1])

print(min(RGB[N - 1]))
