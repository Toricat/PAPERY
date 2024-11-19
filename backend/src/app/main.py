from api.router import router
from core.config import settings
from core.setup import create_application

app = create_application(router=router, settings=settings)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)