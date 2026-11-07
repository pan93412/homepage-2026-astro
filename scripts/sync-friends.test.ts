import { describe, expect, test } from "bun:test"
import { parseFriendSheet } from "./sync-friends"

const header = '"時間戳記","網站名字","網站描述","個人網站連結","頭貼/Logo 連結","上架"\n'

describe("Friendship sheet import", () => {
  test("publishes only approved rows and preserves quoted multiline text", () => {
    const csv =
      header +
      '"date","A, B","Line one\nLine ""two""","https://example.com/","https://example.com/a.png","TRUE"\n' +
      '"date","Unapproved","Private draft","javascript:alert(1)","invalid","FALSE"\n'
    expect(parseFriendSheet(csv)).toEqual([
      {
        name: "A, B",
        description: 'Line one\nLine "two"',
        url: "https://example.com/",
        avatar: "https://example.com/a.png",
      },
    ])
  })

  test("rejects unexpected responses instead of replacing the published list", () => {
    for (const source of [
      "",
      "<html>Access denied</html>",
      '"name","url"\n"Friend","https://example.com"',
    ]) {
      expect(() => parseFriendSheet(source)).toThrow()
    }
  })

  test("rejects executable links and avatar URLs", () => {
    for (const [url, avatar] of [
      ["javascript:alert(1)", "https://example.com/a.png"],
      ["https://example.com/", "data:image/svg+xml,test"],
    ]) {
      expect(() =>
        parseFriendSheet(header + `"date","Friend","Description","${url}","${avatar}","TRUE"`),
      ).toThrow("HTTP(S)")
    }
  })

  test("allows removal of the last approved entry", () => {
    expect(parseFriendSheet(header)).toEqual([])
  })
})
