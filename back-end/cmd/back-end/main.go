package main

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func main() {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"*"},
		AllowMethods: []string{echo.GET, echo.PUT, echo.POST, echo.DELETE},
	}))

	e.Use(middleware.StaticWithConfig(middleware.StaticConfig{
		Root:  "dist",
		Index: "index.html",
		HTML5: true,
	}))

	err := e.Start("localhost:8081")
	if err != nil {
		panic(err)
	}
}
