/** Vietnamese copy for /skills/:slug — slugs must match skillDetail-en.ts */
export const skillDetailVi = {
  backToSkills: 'Quay lại kỹ năng',
  learnMoreAria: 'Xem chi tiết về',
  breadcrumbAria: 'Đường dẫn',
  knowHeading: 'Những gì tôi biết',
  doneHeading: 'Những gì tôi đã làm',
  metaTitleSuffix: 'Võ Quốc Dinh',
  /** {skill} được thay bằng tên kỹ năng trên trang chi tiết */
  skillUpdatingNote: 'Tôi vẫn đang update kỹ năng {skill} của mình mỗi ngày để trở nên tốt hơn.',
  entries: [
    {
      slug: 'react',
      title: 'React',
      know: [
        'Component theo hàm, hooks (useState, useEffect, useMemo, useCallback) và tổ chức component.',
        'Code splitting, lazy loading và tối ưu render cho môi trường production.',
        'Làm việc với TypeScript, React Router và các thư viện phổ biến trong hệ sinh thái.',
      ],
      done: [
        'Xây dựng và duy trì frontend React + TypeScript quy mô lớn tại BridgeUp (Vite) với kiến trúc module rõ ràng.',
        'Triển khai tính năng dashboard, social với React Query và ranh giới component hợp lý.',
        'Giảm re-render thừa và cải thiện cảm nhận tải trang nhờ lazy route và phân bổ state.',
      ],
    },
    {
      slug: 'typescript',
      title: 'TypeScript',
      know: [
        'Typing mạnh cho component, hook, model API và domain dùng chung.',
        'Interface, generic, utility types và kiểm soát kiểu khi refactor.',
        'Đồng bộ kiểu với DTO phía backend và tầng validation.',
      ],
      done: [
        'Dùng TypeScript xuyên suốt React frontend và NestJS backend để đồng nhất kiểu dữ liệu.',
        'Định nghĩa kiểu dùng chung cho REST payload và form, giảm lỗi sớm.',
        'Tham gia code review với tư duy thiết kế kiểu dễ bảo trì.',
      ],
    },
    {
      slug: 'javascript-es6',
      title: 'JavaScript (ES6+)',
      know: [
        'Cú pháp hiện đại: module, destructuring, async/await, promise và helper array/object.',
        'API trình duyệt, DOM cơ bản và debug thực tế.',
        'Một số pattern hàm và immutability khi giúp code rõ ràng hơn.',
      ],
      done: [
        'Giao feature production với ES module trên Vite và Node.js.',
        'Viết luồng async dễ đọc cho gọi API, auth và state UI.',
        'Tối ưu đoạn nóng và tránh lỗi thường gặp với event và closure.',
      ],
    },
    {
      slug: 'nextjs',
      title: 'Next.js',
      know: [
        'Khái niệm App/Pages, routing, layout và mô hình render kết hợp.',
        'Đánh đổi SSR/SSG và SEO.',
        'Tích hợp React, TypeScript và API routes hoặc BFF.',
      ],
      done: [
        'Triển khai site doanh nghiệp với SSR/SSG tại DXT để cải thiện SEO và first paint.',
        'Tổ chức cấu trúc dự án cho routing và component dùng lại.',
        'Tinh chỉnh hiệu năng (render, cache) với traffic thực.',
      ],
    },
    {
      slug: 'vite',
      title: 'Vite',
      know: [
        'Dev server nhanh, HMR và cấu hình theo môi trường.',
        'Build production với chunk và asset hợp lý.',
        'Plugin và alias đường dẫn cho cấu trúc gọn.',
      ],
      done: [
        'Xây frontend BridgeUp trên Vite + React + TypeScript để lặp dev nhanh.',
        'Tinh chỉnh output build và code splitting để tải trang nhanh hơn.',
        'Dùng Vite làm nền tảng tooling hiện đại, không cần webpack phức tạp.',
      ],
    },
    {
      slug: 'tailwindcss',
      title: 'TailwindCSS',
      know: [
        'Utility-first, breakpoint responsive và design token.',
        'Tổ chức cấu trúc class và pattern tái sử dụng.',
        'Kết hợp với design system khi cần theme.',
      ],
      done: [
        'Làm layout UI portfolio và sản phẩm với Tailwind, spacing/typography nhất quán.',
        'Bàn giao giao diện responsive mobile-first nhanh mà không viết CSS từng file lớn.',
        'Kết hợp Tailwind với thư viện component khi phù hợp.',
      ],
    },
    {
      slug: 'ant-design',
      title: 'Ant Design',
      know: [
        'Form, bảng, modal và màn hình dữ liệu lớn.',
        'Theme và tùy biến trong giới hạn component.',
        'Hành vi nhất quán và cơ bản về accessibility.',
      ],
      done: [
        'Xây dashboard admin và màn hình vận hành với bảng, filter, form.',
        'Mang lại UX đồng nhất cho team vận hành nhờ Ant Design.',
        'Cân bằng mặc định của thư viện với style tùy chỉnh và business rule.',
      ],
    },
    {
      slug: 'html5',
      title: 'HTML5',
      know: [
        'Semantic markup, landmark và cấu trúc phục vụ accessibility.',
        'Form, thuộc tính validation và media khi cần.',
        'Heading và outline thân thiện SEO.',
      ],
      done: [
        'Xây UI có cấu trúc tốt cho screen reader và điều hướng bàn phím.',
        'Làm form và luồng lỗi rõ nghĩa ngữ nghĩa.',
        'Phối hợp designer để chuyển layout thành markup sạch.',
      ],
    },
    {
      slug: 'css3',
      title: 'CSS3',
      know: [
        'Flexbox, Grid, layout responsive và pattern hiện đại.',
        'Animation, transition và motion nhẹ nhàng.',
        'Xử lý trình duyệt và progressive enhancement.',
      ],
      done: [
        'Xây layout responsive cho sản phẩm mobile-first.',
        'Hiểu CSS khi cần chỉnh sâu dù chủ yếu dùng Tailwind.',
        'Hoàn thiện trạng thái hover, focus, loading, empty.',
      ],
    },
    {
      slug: 'nodejs',
      title: 'Node.js',
      know: [
        'Event loop, async I/O và cấu trúc service.',
        'npm/yarn, script và biến môi trường.',
        'Tích hợp framework HTTP và middleware.',
      ],
      done: [
        'Phát triển service Node.js và API song song với React trong team fullstack.',
        'Xử lý auth, validation và lỗi trên production.',
        'Dùng Node cho tooling và ranh giới microservice trong dự án.',
      ],
    },
    {
      slug: 'nestjs',
      title: 'NestJS',
      know: [
        'Module, controller, provider, DI và phân tầng.',
        'Guard, interceptor, pipe và validation với class-validator.',
        'Thiết kế REST và tích hợp Prisma + PostgreSQL.',
      ],
      done: [
        'Thiết kế và triển khai REST API BridgeUp với NestJS + Prisma.',
        'JWT auth và phân quyền theo vai trò trên nhiều module.',
        'Tối ưu query và cấu trúc response cho frontend tiêu thụ ổn định.',
      ],
    },
    {
      slug: 'restful-apis',
      title: 'RESTful APIs',
      know: [
        'Mô hình resource, HTTP, status code và idempotency.',
        'Phân trang, filter, versioning và format lỗi.',
        'Tài liệu OpenAPI/Swagger cho đồng bộ team.',
      ],
      done: [
        'Giao REST API production cho React client với typing rõ ràng.',
        'Phối hợp frontend về pagination, cache và lỗi hiển thị cho user.',
        'Giảm payload và cải thiện độ trễ endpoint tải cao.',
      ],
    },
    {
      slug: 'jwt-authentication',
      title: 'JWT Authentication',
      know: [
        'Access/refresh token, trade-off lưu trữ và rotation.',
        'Ký, verify và guard NestJS.',
        'So sánh session vs JWT trong SPA.',
      ],
      done: [
        'Triển khai JWT + RBAC cho dự án healthcare và EdTech.',
        'Bảo vệ route trên server và kiểm tra vai trò.',
        'Làm việc với header bảo mật và hardening production.',
      ],
    },
    {
      slug: 'prisma-orm',
      title: 'Prisma ORM',
      know: [
        'Schema, migration và quan hệ.',
        'Query API, transaction và tối ưu.',
        'Type-safe database access với NestJS.',
      ],
      done: [
        'Dùng Prisma với PostgreSQL cho BridgeUp và đồ án.',
        'Viết query hiệu quả, tránh N+1 ở endpoint danh sách.',
        'Duy trì schema qua migration và review team.',
      ],
    },
    {
      slug: 'postgresql',
      title: 'PostgreSQL',
      know: [
        'Mô hình quan hệ, index, constraint và chuẩn hóa.',
        'SQL cơ bản và kiểm tra hiệu năng với EXPLAIN.',
        'Cột JSON khi phù hợp so với bảng chuẩn hóa.',
      ],
      done: [
        'Database chính cho backend NestJS + Prisma.',
        'Tinh chỉnh query góp phần giảm thời gian phản hồi API.',
        'Thiết kế schema cho phân quyền và dữ liệu đa module.',
      ],
    },
    {
      slug: 'mysql',
      title: 'MySQL',
      know: [
        'Mô hình quan hệ và SQL cơ bản.',
        'Index và pattern tối ưu thường gặp.',
        'Làm việc với ORM và schema legacy.',
      ],
      done: [
        'Làm việc với MySQL trong bài tập và dự án doanh nghiệp.',
        'Import/export dữ liệu và migration schema.',
        'So sánh với PostgreSQL theo bối cảnh triển khai.',
      ],
    },
    {
      slug: 'mongodb',
      title: 'MongoDB',
      know: [
        'Document, collection và index.',
        'Khi nào document store phù hợp hơn quan hệ.',
        'Aggregation và query cơ bản.',
      ],
      done: [
        'Dùng MongoDB trong đồ án học và prototype.',
        'Mô hình document linh hoạt khi yêu cầu thay đổi.',
        'Tích hợp driver Node và REST thử nghiệm.',
      ],
    },
    {
      slug: 'database-design',
      title: 'Thiết kế & tối ưu cơ sở dữ liệu',
      know: [
        'Chuẩn hóa, khóa, ràng buộc và toàn vẹn dữ liệu.',
        'Chiến lược index và cơ bản về query plan.',
        'Mở rộng: replica, cache, phân vùng.',
      ],
      done: [
        'Thiết kế schema cho app multi-module và phân quyền.',
        'Cải thiện hiệu năng query và giảm thời gian phản hồi API.',
        'Cân bằng denormalization với dễ đọc và bảo trì.',
      ],
    },
    {
      slug: 'react-query',
      title: 'React Query',
      know: [
        'Query, mutation, cache key, invalidation và stale time.',
        'Refetch nền và optimistic update khi phù hợp.',
        'DevTools để debug tầng dữ liệu.',
      ],
      done: [
        'Dùng TanStack Query (React Query) tại BridgeUp để giảm gọi API trùng.',
        'Cải thiện UX với loading/error và refetch dựa cache.',
        'Tách server state rõ khỏi state UI cục bộ.',
      ],
    },
    {
      slug: 'context-api',
      title: 'Context API',
      know: [
        'Provider, consumer và tránh re-render thừa.',
        'Khi nào dùng context vs state cục bộ.',
        'Kết hợp memo và hooks.',
      ],
      done: [
        'Xây context UI cho theme, gợi ý auth và cross-cutting.',
        'Giảm prop drilling trong cây React vừa phải.',
        'Kết hợp Context với React Query để phân tách server/client state.',
      ],
    },
    {
      slug: 'ssr-ssg',
      title: 'SSR / SSG',
      know: [
        'Đánh đổi SSR và SSG.',
        'SEO và TTFB.',
        'Hydration và fetch dữ liệu trên server.',
      ],
      done: [
        'Triển khai SSR/SSG với Next.js tại DXT để SEO và first paint tốt hơn.',
        'Chọn chế độ render theo từng route và độ “tươi” của nội dung.',
        'Đo lường tác động hiệu năng và SEO.',
      ],
    },
    {
      slug: 'git-github',
      title: 'Git / GitHub',
      know: [
        'Nhánh feature, merge, rebase và xử lý conflict.',
        'Pull request, review và CI.',
        'Tag, release và commit message rõ ràng.',
      ],
      done: [
        'Quy trình Git hằng ngày trong team Agile có code review.',
        'Làm việc qua PR GitHub với mô tả và reviewer rõ.',
        'Chiến lược nhánh để giao an toàn và rollback khi cần.',
      ],
    },
    {
      slug: 'docker',
      title: 'Docker',
      know: [
        'Image, container, Dockerfile và multi-stage build.',
        'Compose cho stack dev local.',
        'Ranh giới service và môi trường tái lập.',
      ],
      done: [
        'Docker hóa service trong đồ án kiến trúc microservice.',
        'Đồng bộ dev và deploy giảm lỗi môi trường.',
        'Build image cho Node và tích hợp CI.',
      ],
    },
    {
      slug: 'linux',
      title: 'Linux',
      know: [
        'Shell cơ bản, quyền, process và filesystem.',
        'Triển khai và xử lý sự cố trên server Linux.',
        'Package manager và cấu hình môi trường.',
      ],
      done: [
        'Phát triển và triển khai dự án web trên môi trường Linux.',
        'Dùng SSH, log để debug production.',
        'Quen với runner CI và instance cloud chạy Linux.',
      ],
    },
    {
      slug: 'swagger',
      title: 'Swagger',
      know: [
        'OpenAPI, schema và tài liệu endpoint.',
        'Sinh client và chia sẻ contract với frontend.',
        'Giữ doc khớp code.',
      ],
      done: [
        'Soạn Swagger/OpenAPI cho API NestJS tại DXT.',
        'Giảm ma sát tích hợp frontend-backend.',
        'Dùng doc làm nguồn sự thật cho request/response.',
      ],
    },
    {
      slug: 'jira',
      title: 'Jira',
      know: [
        'Sprint, backlog và luồng story.',
        'Liên kết issue với release và blocker.',
        'Ước lượng và giao tiếp trong team.',
      ],
      done: [
        'Giao feature đúng sprint trong môi trường Agile.',
        'Theo dõi bug, task và release với owner rõ.',
        'Phối hợp product, QA và các bên liên quan.',
      ],
    },
    {
      slug: 'figma',
      title: 'Figma',
      know: [
        'Đọc layout, spacing và spec component.',
        'Export asset và inspect token.',
        'Bình luận và handoff thiết kế.',
      ],
      done: [
        'Cắt UI từ Figma với độ sát thiết kế.',
        'Thống nhất với designer về responsive và edge case.',
        'Dùng Figma cho portfolio và mockup dự án.',
      ],
    },
    {
      slug: 'vercel',
      title: 'Vercel',
      know: [
        'Deploy, preview URL và biến môi trường.',
        'Preset framework và cấu hình build.',
        'CDN/edge cơ bản cho asset tĩnh.',
      ],
      done: [
        'Deploy frontend với vòng lặp nhanh và preview.',
        'Cấu hình production/staging cho SPA.',
        'Build output thân thiện Vercel từ Vite/React.',
      ],
    },
    {
      slug: 'render',
      title: 'Render',
      know: [
        'Web service, worker và database managed.',
        'Biến môi trường và health check.',
        'Deploy hook và rollback.',
      ],
      done: [
        'Host backend và kết nối database trên Render.',
        'Quản lý cấu hình production và secret an toàn.',
        'Theo dõi uptime và log cho API.',
      ],
    },
    {
      slug: 'jest',
      title: 'Jest',
      know: [
        'Unit test, matcher, mock và snapshot có chừng mực.',
        'Chạy trong CI và ngưỡng coverage.',
        'Pattern test async.',
      ],
      done: [
        'Viết unit test cho NestJS và React tại BridgeUp.',
        'Góp phần mục tiêu coverage ~80% với test có ý nghĩa.',
        'Mock để tách service và dependency ngoài.',
      ],
    },
    {
      slug: 'react-testing-library',
      title: 'React Testing Library',
      know: [
        'Test hành vi người dùng thay vì chi tiết implementation.',
        'Query, async utility và selector thân thiện accessibility.',
        'Test component kiểu tích hợp.',
      ],
      done: [
        'Test component gần với luồng người dùng thật.',
        'Kết hợp Jest để phủ hồi quy UI.',
        'Tập trung accessibility và assertion có ý nghĩa.',
      ],
    },
    {
      slug: 'unit-integration-testing',
      title: 'Unit & Integration Testing',
      know: [
        'Test pyramid: unit vs integration vs e2e.',
        'Test xác định, fixture và dữ liệu test.',
        'Tích hợp CI và giảm test flaky.',
      ],
      done: [
        'Duy trì thói quen test với Jest và Testing Library.',
        'Bắt regression trước release và giúp refactor an tâm.',
        'Cân bằng coverage với tốc độ và bảo trì trong CI.',
      ],
    },
  ],
} as const;
