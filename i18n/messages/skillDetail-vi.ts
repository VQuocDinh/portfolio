/** Vietnamese copy for /skills/:slug — slugs must match skillDetail-en.ts */
export const skillDetailVi = {
  backToSkills: 'Quay lại kỹ năng',
  learnMoreAria: 'Xem chi tiết về',
  breadcrumbAria: 'Đường dẫn',
  knowHeading: 'Những gì tôi biết',
  doneHeading: 'Những gì tôi đã làm',
  metaTitleSuffix: 'Võ Quốc Dinh',
  skillUpdatingNote: 'Tôi vẫn đang update kỹ năng {skill} của mình mỗi ngày để trở nên tốt hơn.',
  entries: [
    {
      slug: 'react',
      title: 'React',
      know: [
        'Giao diện theo component, hooks và tổ chức SPA có thể mở rộng.',
        'Tối ưu hiệu năng: memo, code splitting, lazy route.',
        'Tích hợp TypeScript, router và thư viện dữ liệu.',
      ],
      done: [
        'Phát triển frontend React + TypeScript (Vite) có kiến trúc module tại BridgeUp.',
        'Xây tính năng social và dashboard với ranh giới component rõ ràng.',
        'Áp dụng code splitting và lazy loading để cải thiện tải ban đầu.',
      ],
    },
    {
      slug: 'nextjs',
      title: 'Next.js',
      know: [
        'App Router, layout và đánh đổi SSR/SSG.',
        'Tối ưu SEO và hiệu năng tải trang.',
        'Tích hợp React, TypeScript và API routes.',
      ],
      done: [
        'Triển khai ứng dụng doanh nghiệp với SSR/SSG tại DXT để cải thiện SEO và first paint.',
        'Xây giao diện responsive mobile-first với Next.js và Tailwind.',
        'Tổ chức routing và UI dùng lại.',
      ],
    },
    {
      slug: 'typescript',
      title: 'TypeScript',
      know: [
        'Typing mạnh cho app, API và model dùng chung.',
        'Interface, generic và refactor an toàn.',
        'Đồng bộ kiểu giữa frontend và DTO backend.',
      ],
      done: [
        'Dùng TypeScript xuyên suốt React và NestJS.',
        'Định nghĩa kiểu cho REST payload và form.',
        'Tham gia review với thiết kế kiểu dễ bảo trì.',
      ],
    },
    {
      slug: 'javascript-es6',
      title: 'JavaScript (ES6+)',
      know: [
        'Cú pháp hiện đại: module, async/await, promise.',
        'Nền tảng trình duyệt và debug thực tế.',
        'Pattern dễ đọc cho luồng async và tích hợp API.',
      ],
      done: [
        'Giao feature trên codebase ES module với Vite và Node.',
        'Viết JS/TS bảo trì được trong team production.',
      ],
    },
    {
      slug: 'tailwindcss',
      title: 'Tailwind CSS',
      know: [
        'Utility-first, breakpoint và token giao diện.',
        'Tổ chức class gọn, ít CSS tay.',
        'Kết hợp layout React/Next và design system.',
      ],
      done: [
        'Xây UI với Tailwind ở BridgeUp và DXT.',
        'Bàn giao giao diện responsive nhanh và nhất quán.',
      ],
    },
    {
      slug: 'nestjs',
      title: 'NestJS',
      know: [
        'Module, controller, provider, guard và pipe validation.',
        'Thiết kế REST với Prisma/ORM.',
        'JWT và kiến trúc phân tầng.',
      ],
      done: [
        'Thiết kế REST API BridgeUp với NestJS + Prisma + PostgreSQL.',
        'Triển khai auth an toàn và phân quyền theo module.',
      ],
    },
    {
      slug: 'nodejs',
      title: 'Node.js',
      know: [
        'Cấu trúc service, async I/O và middleware HTTP.',
        'Quy trình npm và biến môi trường.',
        'Tích hợp stack kiểu Express và tooling.',
      ],
      done: [
        'Xây và duy trì service Node song song với React.',
        'Xử lý validation, lỗi và log production.',
      ],
    },
    {
      slug: 'restful-apis',
      title: 'RESTful APIs',
      know: [
        'Mô hình resource, HTTP và payload lỗi nhất quán.',
        'Phân trang, filter và tài liệu OpenAPI/Swagger.',
        'Versioning và contract rõ cho frontend.',
      ],
      done: [
        'Giao REST API production cho ứng dụng React.',
        'Phối hợp frontend về hiệu năng và tích hợp.',
      ],
    },
    {
      slug: 'microservices',
      title: 'Kiến trúc microservices',
      know: [
        'Ranh giới dịch vụ, contract và deploy độc lập.',
        'Đánh đổi với monolith khi scale team.',
        'Đóng gói container và quan sát cơ bản.',
      ],
      done: [
        'Làm đồ án e-commerce hướng dịch vụ với Docker.',
        'Tập trung API rõ ràng giữa các service.',
      ],
    },
    {
      slug: 'react-native',
      title: 'React Native',
      know: [
        'UI mobile đa nền tảng theo pattern React.',
        'Điều hướng, danh sách và khác biệt nền tảng.',
        'Tương tác JS/native ở mức tổng quan.',
      ],
      done: [
        'Phát triển trải nghiệm mobile với React Native trong học tập và dự án.',
        'Tái sử dụng tư duy component giữa web và mobile.',
      ],
    },
    {
      slug: 'postgresql',
      title: 'PostgreSQL',
      know: [
        'Mô hình quan hệ, index, ràng buộc và tối ưu query.',
        'Cột JSON khi phù hợp.',
        'Transaction và toàn vẹn dữ liệu.',
      ],
      done: [
        'Database chính cho NestJS + Prisma.',
        'Tối ưu query giúp API phản hồi nhanh hơn.',
      ],
    },
    {
      slug: 'mysql',
      title: 'MySQL',
      know: [
        'SQL quan hệ, index và tiến hóa schema.',
        'Làm việc với ORM và hệ thống legacy.',
      ],
      done: [
        'Dùng MySQL trong bài tập và tích hợp.',
        'So sánh triển khai với PostgreSQL khi cần.',
      ],
    },
    {
      slug: 'prisma',
      title: 'Prisma',
      know: [
        'Schema, migration và query type-safe.',
        'Quan hệ, transaction và hiệu năng.',
      ],
      done: [
        'Dùng Prisma với PostgreSQL cho BridgeUp và dự án DXT.',
        'Duy trì thay đổi schema qua migration và review.',
      ],
    },
    {
      slug: 'typeorm',
      title: 'TypeORM',
      know: [
        'Entity, repository và mapping quan hệ.',
        'Migration và query trong service TypeScript.',
      ],
      done: [
        'Áp dụng TypeORM khi dự án chuẩn hóa theo đó.',
        'Làm việc với decorator và model quan hệ.',
      ],
    },
    {
      slug: 'react-query',
      title: 'React Query',
      know: [
        'Query, mutation, cache key và invalidation.',
        'Tách server state khỏi UI state.',
      ],
      done: [
        'Giảm gọi API trùng và cải thiện UX tại BridgeUp và DXT.',
        'Căn chỉnh cache theo nhu cầu sản phẩm.',
      ],
    },
    {
      slug: 'redux-toolkit',
      title: 'Redux Toolkit',
      know: [
        'Slice, configureStore và cập nhật state dự đoán được.',
        'Khi nào cần global client state vs server cache.',
      ],
      done: [
        'Dùng RTK khi team chuẩn hóa Redux cho state UI phức tạp.',
        'Giữ cập nhật state dễ test và theo dõi.',
      ],
    },
    {
      slug: 'context-api',
      title: 'Context API',
      know: [
        'Provider và tránh re-render thừa.',
        'Kết hợp hooks cho cross-cutting UI.',
      ],
      done: [
        'Giảm prop drilling trong cây React vừa phải.',
        'Kết hợp React Query để tách server/client state.',
      ],
    },
    {
      slug: 'cicd-github-actions',
      title: 'CI/CD (GitHub Actions)',
      know: [
        'Workflow, job, secret và artifact.',
        'Pipeline test và deploy tự động.',
      ],
      done: [
        'Thiết lập và cải tiến CI cho repo team.',
        'Tích hợp check giảm regression trước merge.',
      ],
    },
    {
      slug: 'docker',
      title: 'Docker',
      know: [
        'Image, multi-stage build và môi trường tái lập.',
        'Compose cho dev local.',
      ],
      done: [
        'Docker hóa service trong dự án microservices.',
        'Đồng bộ dev/prod giảm lỗi môi trường.',
      ],
    },
    {
      slug: 'vercel',
      title: 'Vercel',
      know: [
        'Deploy, preview URL và biến môi trường.',
        'Preset cho Next.js và site tĩnh.',
      ],
      done: [
        'Triển khai frontend với preview và production nhanh.',
      ],
    },
    {
      slug: 'render',
      title: 'Render',
      know: [
        'Web service, worker và cấu hình môi trường.',
        'Health check và deploy hook.',
      ],
      done: [
        'Host API và kết nối database trên Render trong dự án.',
      ],
    },
    {
      slug: 'jest',
      title: 'Jest',
      know: [
        'Unit test, mock, matcher và CI.',
        'Coverage và assertion có ý nghĩa.',
      ],
      done: [
        'Viết unit test cho service và UI logic hướng tới ~80% coverage.',
      ],
    },
    {
      slug: 'react-testing-library',
      title: 'React Testing Library',
      know: [
        'Test hành vi người dùng và query thân thiện a11y.',
        'Tiện ích async.',
      ],
      done: [
        'Test component kiểu tích hợp theo luồng người dùng.',
      ],
    },
    {
      slug: 'unit-integration-testing',
      title: 'Unit & Integration Testing',
      know: [
        'Test pyramid, fixture và suite ổn định.',
        'Giảm flaky và cân bằng tốc độ CI.',
      ],
      done: [
        'Duy trì thói quen test trên NestJS và React.',
      ],
    },
    {
      slug: 'jwt',
      title: 'JWT',
      know: [
        'Access/refresh, ký và claim an toàn.',
        'Guard NestJS và tiêu thụ ở SPA.',
      ],
      done: [
        'Triển khai JWT + RBAC cho module production.',
      ],
    },
    {
      slug: 'oauth2',
      title: 'OAuth2',
      know: [
        'Luồng ủy quyền ở mức tích hợp thực tế.',
        'Token, scope và redirect an toàn.',
      ],
      done: [
        'Tích hợp auth bên thứ ba khi sản phẩm cần truy cập ủy quyền.',
      ],
    },
    {
      slug: 'git-github',
      title: 'Git / GitHub',
      know: [
        'Nhánh, PR, review và release.',
        'CI và quy trình cộng tác.',
      ],
      done: [
        'Quy trình GitHub hằng ngày trong team Agile có code review.',
      ],
    },
    {
      slug: 'swagger',
      title: 'Swagger',
      know: [
        'OpenAPI và đồng bộ doc với code.',
        'Chia sẻ contract với frontend.',
      ],
      done: [
        'Soạn Swagger/OpenAPI cho API NestJS tại DXT.',
      ],
    },
    {
      slug: 'jira',
      title: 'Jira',
      know: [
        'Sprint, backlog và truy vết công việc.',
        'Liên kết với release và các bên.',
      ],
      done: [
        'Giao feature theo sprint với owner rõ.',
      ],
    },
    {
      slug: 'figma',
      title: 'Figma',
      know: [
        'Đọc spec, spacing và handoff component.',
        'Export asset và phối hợp designer.',
      ],
      done: [
        'Cắt UI từ Figma với hành vi responsive.',
      ],
    },
    {
      slug: 'cursor',
      title: 'Cursor',
      know: [
        'Chỉnh sửa hỗ trợ AI, prompt và workflow theo repo.',
        'Cân bằng tốc độ với review và đúng sai.',
      ],
      done: [
        'Dùng Cursor để tăng tốc triển khai và refactor hằng ngày.',
      ],
    },
    {
      slug: 'github-copilot',
      title: 'GitHub Copilot',
      know: [
        'Gợi ý inline, test và sinh boilerplate.',
        'Sử dụng có trách nhiệm kèm review.',
      ],
      done: [
        'Kết hợp Copilot với Cursor để tăng tốc giao feature khoảng 30–40% trong quy trình điển hình.',
      ],
    },
  ],
} as const;
