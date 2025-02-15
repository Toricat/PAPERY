from sqlalchemy import  ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from core.db.database import Base
from core.db.models import TimestampMixin, SoftDeleteMixin

class RateLimit(Base,TimestampMixin, SoftDeleteMixin):
    __tablename__ = "rate_limit"

    id: Mapped[int] = mapped_column("id", autoincrement=True, nullable=False, unique=True, primary_key=True, init=False)
    tier_id: Mapped[int] = mapped_column(ForeignKey("tier.id"), index=True)
    name: Mapped[str] = mapped_column(String(50), nullable=False, unique=True)
    path: Mapped[str] = mapped_column(String(255), nullable=False)
    limit: Mapped[int] = mapped_column(Integer, nullable=False)
    period: Mapped[int] = mapped_column(Integer, nullable=False)

