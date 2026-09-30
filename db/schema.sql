-- Local Kokani — MySQL / MariaDB schema
-- Run once in hPanel → Databases → phpMyAdmin → Import  (or: mysql -u USER -p DBNAME < db/schema.sql)
--
-- Design: every content table keeps the fields we FILTER/SORT on as real columns
-- (fast + indexed) and the rest of the document (images[], roomTypes[], faqs[] ...)
-- as JSON text in `data`. Your existing UI keeps receiving exactly the same
-- object shapes it got from Firestore.

SET NAMES utf8mb4;

-- ───────── Auth ─────────
CREATE TABLE IF NOT EXISTS admins (
  id           VARCHAR(36)  NOT NULL PRIMARY KEY,
  email        VARCHAR(190) NOT NULL,
  passwordHash VARCHAR(100) NOT NULL,
  name         VARCHAR(120) NULL,
  createdAt    DATETIME     NOT NULL,
  UNIQUE KEY uq_admin_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS owners (
  id           VARCHAR(64)  NOT NULL PRIMARY KEY,
  email        VARCHAR(190) NOT NULL,
  passwordHash VARCHAR(100) NOT NULL,
  data         LONGTEXT     NOT NULL,
  createdAt    DATETIME     NOT NULL,
  updatedAt    DATETIME     NOT NULL,
  UNIQUE KEY uq_owner_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ───────── Content ─────────
CREATE TABLE IF NOT EXISTS destinations (
  id         VARCHAR(64)  NOT NULL PRIMARY KEY,
  slug       VARCHAR(190) NOT NULL,
  name       VARCHAR(190) NULL,
  featured   TINYINT(1)   NOT NULL DEFAULT 0,
  archived   TINYINT(1)   NOT NULL DEFAULT 0,
  data       LONGTEXT     NOT NULL,
  createdAt  DATETIME     NOT NULL,
  updatedAt  DATETIME     NOT NULL,
  UNIQUE KEY uq_dest_slug (slug),
  KEY ix_dest_featured (featured, archived),
  KEY ix_dest_name (name)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS hotels (
  id                  VARCHAR(64)  NOT NULL PRIMARY KEY,
  slug                VARCHAR(190) NOT NULL,
  status              VARCHAR(20)  NOT NULL DEFAULT 'active',
  destinationId       VARCHAR(64)  NULL,
  ownerId             VARCHAR(64)  NULL,
  featured            TINYINT(1)   NOT NULL DEFAULT 0,
  sponsored           TINYINT(1)   NOT NULL DEFAULT 0,
  price               DOUBLE       NULL,
  rating              DOUBLE       NOT NULL DEFAULT 0,
  featuredPromotedAt  DATETIME     NULL,
  sponsoredPromotedAt DATETIME     NULL,
  data                LONGTEXT     NOT NULL,
  createdAt           DATETIME     NOT NULL,
  updatedAt           DATETIME     NOT NULL,
  UNIQUE KEY uq_hotel_slug (slug),
  KEY ix_hotel_status (status, createdAt),
  KEY ix_hotel_dest (destinationId, status),
  KEY ix_hotel_featured (featured, status),
  KEY ix_hotel_owner (ownerId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS restaurants (
  id                  VARCHAR(64)  NOT NULL PRIMARY KEY,
  slug                VARCHAR(190) NOT NULL,
  status              VARCHAR(20)  NOT NULL DEFAULT 'active',
  destinationId       VARCHAR(64)  NULL,
  ownerId             VARCHAR(64)  NULL,
  featured            TINYINT(1)   NOT NULL DEFAULT 0,
  sponsored           TINYINT(1)   NOT NULL DEFAULT 0,
  rating              DOUBLE       NOT NULL DEFAULT 0,
  featuredPromotedAt  DATETIME     NULL,
  sponsoredPromotedAt DATETIME     NULL,
  data                LONGTEXT     NOT NULL,
  createdAt           DATETIME     NOT NULL,
  updatedAt           DATETIME     NOT NULL,
  UNIQUE KEY uq_rest_slug (slug),
  KEY ix_rest_status (status, createdAt),
  KEY ix_rest_dest (destinationId, status),
  KEY ix_rest_featured (featured, status),
  KEY ix_rest_owner (ownerId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS posts (
  id              VARCHAR(64)  NOT NULL PRIMARY KEY,
  slug            VARCHAR(190) NOT NULL,
  published       TINYINT(1)   NOT NULL DEFAULT 0,
  destinationSlug VARCHAR(190) NULL,
  publishedAt     DATETIME     NULL,
  data            LONGTEXT     NOT NULL,
  createdAt       DATETIME     NOT NULL,
  updatedAt       DATETIME     NOT NULL,
  UNIQUE KEY uq_post_slug (slug),
  KEY ix_post_pub (published, publishedAt),
  KEY ix_post_dest (destinationSlug, published)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS landingPages (
  id         VARCHAR(64)  NOT NULL PRIMARY KEY,
  slug       VARCHAR(190) NOT NULL,
  published  TINYINT(1)   NOT NULL DEFAULT 0,
  data       LONGTEXT     NOT NULL,
  createdAt  DATETIME     NOT NULL,
  updatedAt  DATETIME     NOT NULL,
  UNIQUE KEY uq_lp_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ───────── Inbound (visitor-generated) ─────────
CREATE TABLE IF NOT EXISTS leads (
  id         VARCHAR(64) NOT NULL PRIMARY KEY,
  status     VARCHAR(20) NOT NULL DEFAULT 'new',
  data       LONGTEXT    NOT NULL,
  createdAt  DATETIME    NOT NULL,
  updatedAt  DATETIME    NOT NULL,
  KEY ix_lead_status (status, createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS contactMessages (
  id         VARCHAR(64) NOT NULL PRIMARY KEY,
  status     VARCHAR(20) NOT NULL DEFAULT 'new',
  data       LONGTEXT    NOT NULL,
  createdAt  DATETIME    NOT NULL,
  updatedAt  DATETIME    NOT NULL,
  KEY ix_contact_status (status, createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS reviews (
  id         VARCHAR(64) NOT NULL PRIMARY KEY,
  entityType VARCHAR(20) NULL,
  entityId   VARCHAR(64) NULL,
  approved   TINYINT(1)  NOT NULL DEFAULT 0,
  data       LONGTEXT    NOT NULL,
  createdAt  DATETIME    NOT NULL,
  updatedAt  DATETIME    NOT NULL,
  KEY ix_review_entity (entityType, entityId, approved, createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS partnerApplications (
  id             VARCHAR(64) NOT NULL PRIMARY KEY,
  ownerId        VARCHAR(64) NULL,
  status         VARCHAR(20) NOT NULL DEFAULT 'pending',
  registrationId VARCHAR(40) NULL,
  data           LONGTEXT    NOT NULL,
  createdAt      DATETIME    NOT NULL,
  updatedAt      DATETIME    NOT NULL,
  KEY ix_partner_owner (ownerId, createdAt),
  KEY ix_partner_status (status, createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS promotionRequests (
  id            VARCHAR(64) NOT NULL PRIMARY KEY,
  ownerId       VARCHAR(64) NULL,
  entityId      VARCHAR(64) NULL,
  entityType    VARCHAR(20) NULL,
  promotionType VARCHAR(20) NULL,
  status        VARCHAR(30) NOT NULL DEFAULT 'pending_payment',
  startDate     VARCHAR(10) NULL,
  endDate       VARCHAR(10) NULL,
  data          LONGTEXT    NOT NULL,
  createdAt     DATETIME    NOT NULL,
  updatedAt     DATETIME    NOT NULL,
  KEY ix_promo_owner (ownerId, createdAt),
  KEY ix_promo_entity (entityId, promotionType, status),
  KEY ix_promo_status (status, createdAt)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ───────── Small key/value docs: siteSettings:homepage, promotionPricing:config, systemStatus:promotionCron
CREATE TABLE IF NOT EXISTS settings (
  k          VARCHAR(100) NOT NULL PRIMARY KEY,
  data       LONGTEXT     NOT NULL,
  updatedAt  DATETIME     NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
