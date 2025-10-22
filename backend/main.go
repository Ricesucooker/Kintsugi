package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

type Note struct {
	NoteID    string `json:"noteid"`
	NoteTitle string `json:"notetitle"`
	NoteBody  string `json:"notebody"`
}

type Reply struct {
	ReplyID   string `json:"replyid"`
	ReplyBody string `json:"replybody"`
}

// fake data
var myNote = []Note{
	{
		NoteID:    "1",
		NoteTitle: "Hello world!",
		NoteBody:  "This is just some random note body, nothing really here.",
	},
	{
		NoteID:    "2",
		NoteTitle: "New Notes",
		NoteBody:  "Head empty!",
	},
}

var myReply = []Reply{
	{
		ReplyID:   "1",
		ReplyBody: "hello world, i am a reply",
	},
	{
		ReplyID:   "2",
		ReplyBody: "be good to me",
	},
	{
		ReplyID:   "3",
		ReplyBody: "this might be a bug",
	},
}

//routes

func getNotes(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, myNote)
}

func getNotesbyID(c *gin.Context) {
	noteid := c.Param("noteid")

	for _, a := range myNote {
		if a.NoteID == noteid {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "no note fround"})
}

func getReplyID(c *gin.Context) {

	replyid := c.Param("replyid")

	for _, a := range myReply {
		if a.ReplyID == replyid {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "no reply found"})
}

//middleware

func CORS() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET")
		c.Writer.Header().Set("Allow-Control-Allow-Headers", "ContentType, Accept")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {
	fmt.Println(("starting Go server on :8000"))
	fmt.Println(("Hello, World!"))

	router := gin.Default()
	router.Use(CORS())

	router.GET("api/v1/mynote", getNotes)
	router.GET("api/v1/mynote/:noteid", getNotesbyID)
	router.GET("api/v1/reply/:replyid", getReplyID)

	router.GET("api/v1/Hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "world",
		})
	})

	router.Run(":8000")

}
